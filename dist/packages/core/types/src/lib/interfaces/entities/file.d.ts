import { IoRestorecommerceFileFile } from '@console-core/graphql';
export interface IFile extends Omit<IoRestorecommerceFileFile, 'id' | 'caption' | 'content'> {
    id: string;
    caption: string;
    content: string;
}
