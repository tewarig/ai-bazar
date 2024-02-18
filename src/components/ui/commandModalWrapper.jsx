import React from 'react'
import { getAllMetaData } from '@lib/api'
import CommandModal from  "./commandModal";

async function CommandModalWrapper() {
 const data = await getAllMetaData();
  return (
    <CommandModal categories={data?.categories}  aiModels={data?.aiModels} />
  )
}

export default CommandModalWrapper