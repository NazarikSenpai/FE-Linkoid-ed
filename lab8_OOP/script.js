"use strict";

class Employee {

  constructor (params) {
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.baseSalary = params.baseSalary;
    this.experience = params.experience;
  }

  get countedSalary() {

    if (this.experience > 5) {
      return this.baseSalary * 1.2 + 500;

    } else if (this.experience > 2) {
      return this.baseSalary + 200;

    } else {
      return this.baseSalary;
    }

  }

}

class Developer extends Employee {

  constructor (params) {
    super(params);
  }

}

class Designer extends Employee {

  constructor (params) {
    super(params);

    this.efficiency = params.efficiency;
  }

  get countedSalary() {
    return super.countedSalary * this.efficiency;
  }

  /* set setEfficiency(value) {
    if (value >= 0 && value <= 1) {
      this.efficiency = value;
    } else if (value > 1) {
      this.efficiency = 1;
    } else if (value < 0) {
      this.efficiency = 0;
    }
  } */

}

class Manager extends Employee {

  constructor (params) {
    super(params);

    this.team = params.team;
  }

  get countedSalary() {
    let isHalfDevelopers = (this.team.reduce((counter, employee) => employee instanceof Developer ? ++counter : counter, 0) / this.team.length) > 0.5;
    let countedSalary = super.countedSalary;

    if (this.team.length > 10) {
      countedSalary += 300;
    } else if (this.team.length > 5) {
      countedSalary += 200;
    }

    if (isHalfDevelopers) {
      countedSalary *= 1.1;
    }

    return countedSalary;
  }

}

class Department {

  constructor (managers) {
    this.managers = managers;
  }

  giveSalary() {
    this.managers.forEach(manager => {
      console.log(`Manager ${manager.firstName} ${manager.lastName} gets ${manager.countedSalary}$`);

      console.log("This manager's team:");
      manager.team.forEach(employee => {
        console.log(`\t${employee.constructor.name} ${employee.firstName} ${employee.lastName} gets ${employee.countedSalary}$`);
      });

    });
  }

}

let designerRosanna = new Designer({
  firstName: "Rosanna",
  lastName: "Regan",
  baseSalary: 900,
  experience: 1,
  efficiency: 0.5,
});

let designerKarolyn = new Designer({
  firstName: "Karolyn",
  lastName: "Oli",
  baseSalary: 500,
  experience: 3,
  efficiency: 1,
});

let designerKimberlee = new Designer({
  firstName: "Kimberlee",
  lastName: "Felix",
  baseSalary: 600,
  experience: 6,
  efficiency: 0.7,
});

let designerLilia = new Designer({
  firstName: "Lilia",
  lastName: "Yakiv",
  baseSalary: 700,
  experience: 1,
  efficiency: 0.9,
});

let developerGodfrey = new Developer({
  firstName: "Godfrey",
  lastName: "Shepard",
  baseSalary: 900,
  experience: 1,
});

let developerShannon = new Developer({
  firstName: "Shannon",
  lastName: "Winterbottom",
  baseSalary: 500,
  experience: 3,
});

let developerDarius = new Developer({
  firstName: "Darius",
  lastName: "Fry",
  baseSalary: 600,
  experience: 6,
});

let developerIllya = new Developer({
  firstName: "Illya",
  lastName: "Antonov",
  baseSalary: 700,
  experience: 1,
});

let developerDenys = new Developer({
  firstName: "Denys",
  lastName: "Tkachenko",
  baseSalary: 1000,
  experience: 6,
});

let developerMyron = new Developer({
  firstName: "Myron",
  lastName: "Kovalchuk",
  baseSalary: 7000,
  experience: 10,
});

let developerYakiv = new Developer({
  firstName: "Yakiv",
  lastName: "Tkachenko",
  baseSalary: 1100,
  experience: 3,
});

let managerArtem = new Manager({
  firstName: "Artem",
  lastName: "Zelenko",
  baseSalary: 600,
  experience: 3,
  team: [developerDarius, developerDenys, designerKarolyn, developerIllya, developerMyron, developerShannon],
});

let managerWasyl = new Manager({
  firstName: "Wasyl",
  lastName: "Pasternak",
  baseSalary: 300,
  experience: 1,
  team: [designerKimberlee, designerLilia, developerGodfrey, designerKarolyn, designerRosanna, designerKarolyn, designerKarolyn, designerKarolyn, designerKarolyn, designerKarolyn, designerKarolyn],
});

let company = new Department([managerArtem, managerWasyl]);

company.giveSalary()