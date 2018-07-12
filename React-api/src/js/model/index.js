class ExtractFromJSON {
  constructor(json) {
    this.json = json;
  }

  static getProperty(json, name) {
    const output = [];
    if (!!json) {
      json.map(record => {
        record.hasOwnProperty(name) ? output.push(record[name]) : [];
      });
    }
    return output;
  }

  static getUserGrid(json) {
    //     const usrs = [];
    //     if (!!json) {
    //       json.map(record => {
    //         const obj = {
    //           index: record.index,
    //           guid: record.guid,
    //           id: record._id,
    //           company: record.company,
    //           paymentBalance: record.balance,
    //           contact: { phone: record.phone, email: record.email },
    //           status: record.isActive ? "Active" : "Ideal",
    //           address: record.address
    //         };
    //         usrs.push(obj);
    //       });
    //       //console.log("usrs Array", usrs)
    //     }
    //     return usrs;
    //   }

    if (!!json) {
      const allUser = json.reduce((all, record, index) => {
        all[index] = {
          index: record.index,
          guid: record.guid,
          id: record._id,
          company: record.company,
          paymentBalance: record.balance,
          contact: { phone: record.phone, email: record.email },
          status: record.isActive ? "Active" : "Ideal",
          address: record.address
        };

        return all;
      }, []);

      return allUser;
    }
  }

  static getUsersByGender(json) {
    if (!!json) {
      const byGender = json.reduce(
        (all, item) => {
          all[item.gender].push(item.name);
          return all;
        },
        {
          male: [],
          female: []
        }
      );

      return byGender;
    }
  }

  static getUserById(json, id) {
    if (!!json) {
      //Filter Method Returs new Array
      //     return json.filter(function(item) {
      //     if (item.id === id) {
      //       return item;
      //     }
      //   });

      //Using reduce method to return an Object
      return json.reduce(function(all, item, index) {
        if (item.id === id) {
          all.push(item);
        }
        return all;
      }, []);
    }
  }

  //json.map(function(item){ return item.gender})
  // (6) ["female", "female", "female", "female", "female", "female"]
}

export default ExtractFromJSON;
