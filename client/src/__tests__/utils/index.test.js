import * as Util from '../../utils';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('index.js', () => {
  describe('calcDailyLift', () => {
    test('calculates correctly', () => {
      const answer = Util.calcDailyLift(0.65, 100, 'lbs');
      expect(answer).toBe(65);
    });
    test('rounds numbers correctly', () => {
      let lbsAnswer = Util.calcDailyLift(0.65, 104, 'lbs');
      expect(lbsAnswer).toBe(70);
      lbsAnswer = Util.calcDailyLift(0.65, 103, 'lbs');
      expect(lbsAnswer).toBe(65);
      let kgAnswer = Util.calcDailyLift(0.65, 121, 'kg');
      expect(kgAnswer).toBe(77.5);
      kgAnswer = Util.calcDailyLift(0.65, 122, 'kg');
      expect(kgAnswer).toBe(80);
    });
  });
  describe('repMaxToTm', () => {
    test('calculates correctly', () => {
      const answer = Util.repMaxToTM(100, 'lbs');
      expect(answer).toBe(90);
    });
    test('rounds numbers correctly', () => {
      let lbsAnswer = Util.repMaxToTM(101, 'lbs');
      expect(lbsAnswer).toBe(95);
      lbsAnswer = Util.repMaxToTM(106, 'lbs');
      expect(lbsAnswer).toBe(100);
      let kgAnswer = Util.repMaxToTM(105.25, 'kg');
      console.log(kgAnswer);
    });
  });
  describe('trainMaxToRM', () => {
    test('calculates correctly', () => {
      const answer = Util.trainMaxToRM(100, 'lbs');
      expect(answer).toBe(115);
    });
    test('rounds correctly', () => {
      const answer = Util.trainMaxToRM(105.25, 'kg');
      // expect(answer).toBe(115);
      console.log(answer);
    });
  });
  describe('swapTmRm', () => {
    test('returns an object with swapped names', () => {
      const answer = Util.swapTmRm('benchRM', '100', 'lbs');
      expect(answer).toEqual({ benchRM: 100, benchTM: 90 });
    });
    test('returns numbers and not strings', () => {
      const answer = Util.swapTmRm('benchRM', '100', 'lbs');
      expect(typeof answer.benchRM).toBe('number');
      expect(typeof answer.benchTM).toBe('number');
      const kgAnswer = Util.swapTmRm('benchRM', '105.25', 'kg');
      expect(typeof kgAnswer.benchRM).toBe('number');
      expect(typeof kgAnswer.benchTM).toBe('number');
      console.log(kgAnswer);
    });
  });
});
