import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { FilaAtendimento } from './interfaces/fila-atendimento-interface';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  logger = new Logger(AppController.name);

  @EventPattern('criar-fila-atendimento')
  async criarFilaAtendimento(@Payload() filaAtendimento: FilaAtendimento) {
    this.logger.log(`Fila de Atendimento: ${JSON.stringify(filaAtendimento)}`);
    // Você pode adicionar a lógica para lidar com a criação da fila aqui.
  }
}
