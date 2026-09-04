import { Pipe, PipeTransform } from '@angular/core';
import { toSentenceCase } from './outcomes-model.config';

@Pipe({ name: 'sentenceCase', standalone: true })
export class SentenceCasePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    return toSentenceCase(value);
  }
}
