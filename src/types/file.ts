type IFile = {
  id: string
  name: string
  isFolder?: boolean
  nodes?: IFile[]
}
export type { IFile }
