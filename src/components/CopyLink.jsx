import React from 'react'
import copy from '../assets/copy.svg'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CopyLink({ link }) {
  function handleClick() {
    navigator.clipboard.writeText(link)
    toast('Link copied to clipboard')
  }
  return (
    <>
      <img onClick={handleClick} className='copy' src={copy} alt="copyToClipboard" />
      <ToastContainer />
    </>
  )
}