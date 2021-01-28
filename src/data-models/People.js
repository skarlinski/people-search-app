class People {
  constructor(profile_picture, first_name, last_name, id, phone_number) {
    this.profile_picture = profile_picture;
    this.first_name = first_name;
    this.last_name = last_name;
    this.id = id;
    this.phone_number = phone_number;
  }
  updatedPhoneNumber() {
    return `+${this.phone_number}`;
  }
}

export default People;
