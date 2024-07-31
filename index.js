// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance = null;
// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {// This class has only one instance providing global point of access. 
    constructor(branchInfo) {
        if (bankBranchInstance === null) {
            bankBranchInstance = this;
            this.branchInfo = branchInfo;
        }
        return bankBranchInstance;
    }
    getBranchInfo() {
        return this.branchInfo;
    }
}

const branchA = new BankBranch({ name: 'Branch A', address: '123 Main St18 Montague' });// create new instance of BankBranch
const branchB = new BankBranch({ name: 'Branch B', address: '69 main Rd' });// create new instance of BankBranch

console.log(branchA.getBranchInfo()); // print branch information for branchA
console.log(branchB.getBranchInfo()); // print branch information for branchB which is the same like branch A because it's the same singleton instance. 

console.log(branchA === branchB);// prints true because they are both referencing the same singleton instance.
//Where would one use a real life example of Singleton Pattern?