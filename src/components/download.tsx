interface DownloadProps {
  file: string,
  children: string
}

export function Download({file, children}: DownloadProps){
  return(
    <a href={file} className='downloadBtn' download>
    {children}
</a>
  )
}