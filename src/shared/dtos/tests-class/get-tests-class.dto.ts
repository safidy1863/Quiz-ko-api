import { CreatedClassDto } from '../class';
import { CreateTestDto } from '../tests/create-test.dto';

export class GetTestClassDto {
  class: CreatedClassDto;
  test: CreateTestDto;
}
