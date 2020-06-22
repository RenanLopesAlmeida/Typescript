import { Request, Response } from 'express';
import CreateUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = CreateUser({
        email: 'renan@gmail.com',
        password: '123456',
        techs: [
            'Node',
            'ReactJS',
            'React Native',
            { title:'Javascript', experience: 100 }
        ]
    });

    response.json(user);
}