interface User {
  id: string | number;
  email: string;
}

declare namespace Express {
  export interface Request {
    user?: User;
  }
}
