import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

const _subject = new Subject();

const CounterBloc = {

  counter: () => {
    return _subject.pipe(scan((count, v) => count + v, 0));
  },

  increase: () => {
    _subject.next(1);
  },

  decrease: () => {
    _subject.next(-1);
  },

  dispose: () => {
    _subject.complete();
  },

}

export default CounterBloc;