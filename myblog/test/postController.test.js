const { expect } = require('chai');
const sinon = require('sinon');

const postController = require('../controllers/postController'); // adjust path as needed
const postService = require('../services/postService'); // adjust path as needed

describe('getPostsFeed', function() {
  let req, res, sandbox;

  beforeEach(() => {
    // Create a sandbox for stubs/spies
    sandbox = sinon.createSandbox();

    // Setup a basic req object (if no properties are needed, it can be empty)
    req = {};

    // Create a fake response object with stubbed status and json methods
    res = {
      status: sandbox.stub().returnsThis(),
      json: sandbox.stub()
    };
  });

  afterEach(() => {
    // Restore the sandbox to remove stubs
    sandbox.restore();
  });

  it('should return 200 with posts when posts exist', async function() {
    // Stub postService.getAllPosts to resolve with fake posts
    const fakePosts = [
      { id: 1, title: 'First Post' },
      { id: 2, title: 'Second Post' }
    ];
    sandbox.stub(postService, 'getAllPosts').resolves(fakePosts);

    await postController.getPostsFeed(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(fakePosts)).to.be.true;
  });

  it('should return 400 with error message when no posts are found', async function() {
    // Stub postService.getAllPosts to resolve with a falsy value (null)
    sandbox.stub(postService, 'getAllPosts').resolves(null);

    await postController.getPostsFeed(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.calledWith('error fetching posts')).to.be.true;
  });

  it('should log an error if postService.getAllPosts throws an exception', async function() {
    // Stub postService.getAllPosts to reject with an error
    const fakeError = new Error('Test error');
    sandbox.stub(postService, 'getAllPosts').rejects(fakeError);

    // Stub console.log so we can check that it was called
    const consoleLogStub = sandbox.stub(console, 'log');

    await postController.getPostsFeed(req, res);

    // Verify that the error was logged (you can adjust the check if your log message differs)
    expect(consoleLogStub.calledWith('error', fakeError)).to.be.true;
  });
});

describe('POST /posts - createPost', function() {
  beforeEach(() => {
    req.body = { title: 'New Post', content: 'Post content' };
  });

  it('should return 201 with created post when post is successfully created', async function() {
    const fakePost = { id: 1, title: 'New Post', content: 'Post content' };
    sandbox.stub(postService, 'createPost').resolves(fakePost);
    await postController.createPost(req, res);
    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledWith(fakePost)).to.be.true;
  });

  it('should return 400 with error message when post creation fails', async function() {
    sandbox.stub(postService, 'createPost').resolves(null);
    await postController.createPost(req, res);
    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.calledWith('error creating post')).to.be.true;
  });
});
