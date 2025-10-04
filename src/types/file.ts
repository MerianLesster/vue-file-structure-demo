type IFile = {
  id: string
  name: string
  isFolder?: boolean
  nodes?: IFile[]
}

type IContent = Record<
  string,
  {
    name: string
    isOpen: boolean
  }
>
export type { IFile, IContent }
