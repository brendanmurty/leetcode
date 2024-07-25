type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (check: any) => {
      if (val !== check) {
        throw new Error("Not Equal");
      }
      return (val === check);
    },
    notToBe: (check: any) => {
      if (val === check) {
        throw new Error("Equal");
      }
      return (val !== check);
    }
  }
};