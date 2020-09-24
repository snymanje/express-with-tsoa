import { Controller, Get, Route } from 'tsoa';

@Route('')
export class IndexController extends Controller {
    @Get('')
    async index() {
        return { msg: 'Hello World!' };
    }

    @Get('/msg')
    msg() {
        return { msg: 'This is a message' };
    }
}