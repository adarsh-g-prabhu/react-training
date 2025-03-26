'use client'
import React from 'react';

export default function Error(err:Error) {
    console.log('error',err)
  return (
    <div>Error
        happened
    </div>
  )
}
