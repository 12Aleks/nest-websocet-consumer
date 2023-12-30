import {Module} from "@nestjs/common";
import {SocketController} from "./socket.controller";


@Module({
   providers: [SocketController]
})
export class SocketModule{}