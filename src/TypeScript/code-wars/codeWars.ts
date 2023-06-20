type Grades = 'A' | 'B' | 'C' | 'D';

export type Tuple = [string, number, Grades[]]

interface IPoints {
  A: number
  B: number
  C: number
  D: number
}

export function findHack(arr: Tuple[]) {
  const points: IPoints = { A: 30, B: 20, C: 10, D: 5 };
  const hacked: string[] = [];

  arr.forEach(s => {
    const [name, studentPoints, grades] = s;

    const studentActualPoints = grades.reduce((acc, g, _, a) => {
      acc.grade += points[g];

      if (g === 'A' || g === 'B') {
        acc.gradeCount++;
        let isExcellent = a.every(r => r === 'A' || r === 'B');
        if (isExcellent && acc.gradeCount >= 5) acc.grade = acc.grade + 20;
      }

      return acc;
    }, { grade: 0, gradeCount: 0 });

    if (studentPoints !== studentActualPoints.grade) {
      hacked.push(name);
    }
  });

  return hacked;
}

// ===================================

//return the total number of smiling faces in the array
export function countSmileys(arr: string[]) {

  const eyes = [':', ';'];
  const noses = ['-', '~'];
  const grins = [')', 'D'];

  let smileCount = 0;

  arr.forEach(smile => {
    let eye = eyes.some(x => x === smile[0]);

    if (eye) {
      let nose = noses.some(x => x === smile[1]);
      let grin = grins.some(x => x === smile[1]);

      if (nose) {
        let grin = grins.some(x => x === smile[2]);
        if (grin) {
          smileCount++;
        }
      } else if (grin) {
        smileCount++;
      }
    }
  })

  return smileCount;
}

//

export function countSmileys_v1(arr: string[]) {
  let smileCount = 0;

  arr.forEach(smile => {

    let c1 = smile[0] == ':' || smile[0] == ';';

    if (c1) {
      let c2 = smile[1] == '-' || smile[1] == '~';
      let c4 = smile[1] == ')' || smile[1] == 'D';

      if (c2) {
        let c3 = smile[2] == ')' || smile[2] == 'D';

        if (c3) {
          smileCount++;
        }
      } else if (c4) {
        smileCount++;
      }
    }
  })

  return smileCount;
}

// ===============================

export function createPhoneNumber(numbers: number[]): string {

  let phoneNumber = '(';

  numbers.forEach((n, i) => {
    phoneNumber += n + (i === 2 ? ') ' : i === 5 ? '-' : '');
  })

  return phoneNumber;
}

export function createPhoneNumber_v1(
  numbers: number[], model: string, placeholder: string
) {
  // let phoneNumber = model; // "(xxx) xxx-xxxx"

  numbers.forEach(n => model = model.replace(placeholder, `${n}`));

  return model;
}

// tests

// const model1 = "(xxx) xxx-xxxx";
// const model2 = "xxx-xxxx (xxx)";
// const model3 = "xx (xxx)x-xxxx";

// describe("Basic testing", function () {
//   it("examples", () => {
//     assert.equal(createPhoneNumber_v1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], model1, 'x'), "(123) 456-7890");
//     assert.equal(createPhoneNumber_v1([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], model2, 'x'), "111-1111 (111)");
//     assert.equal(createPhoneNumber_v1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], model3, 'x'), "12 (345)6-7890");
//   });
// });

// ============================

export function isValidWalk(walk: string[]): boolean {

  let map = walk.reduce((m, move) => {
    if (move == 'n') m.y++;
    if (move == 's') m.y--;
    if (move == 'e') m.x++;
    if (move == 'w') m.x--;
    m.t++
    return m;
  }, { x: 0, y: 0, t: 0 });

  return map.x === 0 && map.y === 0 && map.t == 10;
}

// =============================

//Adding values of arrays in a shifted way
// export function addingShifted (arrayOfArrays:number[][], shift:number):number[] {

//   const result: number[] = [];

//   arrayOfArrays.reduce((acc, cur, i) =>{
//     a.
//   }, {c: [], b: });

//   return [0];
// }

// ======================

export function pyramid(n: number) {

  const result: number[][] = []

  for (let i = 0; i < n; i++) {

    const row = Array(i + 1).fill(1);

    result.push(row);
  }

  return result;
}

// ================

export function getLengthOfMissingArray(arrayOfArrays: any[][]): number {
  let ret = 0;
  arrayOfArrays.forEach((x, i, a) => {
    a.some(c => c.length === i + 1) ? null : ret = i + 1;
  })

  return ret;
}

// ====================

export function arrayDiff(a: number[], b: number[]): number[] {

  return a.filter(x => b.length === 0 ? true : !b.some(y => y === x));
}

// ======================

// export function isHollow(x: number[]): boolean {

//   let other = 0;
//   let hollow = 0;

//   x.forEach(e => e !== 0 ? other++ : hollow++)

//   return x.length % 2 != 0 && hollow % 2 != 0 && other != 0 && other % 2 == 0;
// }

