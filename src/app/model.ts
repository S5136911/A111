export class Group {
  objid: string;
  id: number;
  name: string;

  constructor(objid: string, _id: number, _name: string) {
    this.objid = objid;
    this.id = _id;
    this.name = _name;
  }
}

export class User {
  objid: string;
  id: number;
  name: string;
  email: string;
  role: string;

  constructor(
    objid: string,
    _id: number,
    _name: string,
    _email: string,
    _role
  ) {
    this.objid = objid;
    this.id = _id;
    this.name = _name;
    this.email = _email;
    this.role = _role;
  }
}
export class Channel {
  objid: string;
  id: number;
  name: string;

  constructor(objid: string, _id: number, _name: string) {
    this.objid = objid;
    this.id = _id;
    this.name = _name;
  }
}
