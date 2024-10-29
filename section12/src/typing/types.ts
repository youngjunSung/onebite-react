export interface DiaryType {
  id: number;
  createdDate: string;
  emotionId: number;
  content: string;
}
export interface DiaryDispatchContextType {
  onCreate: (createdDate: string, emotionId: number, content: string) => void;
  onModify: (
    id: number,
    createdDate: string,
    emotionId: number,
    content: string
  ) => void;
  onDelete: (id: number) => void;
}
