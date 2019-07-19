import { User } from './user';

export class Post {
    id: number;
    type: String;
    title: String;
    content: String;
    source: String;
    image: String;
    status: String;
    createdDate: String;
    updatedDate: String;
    user: User
}
