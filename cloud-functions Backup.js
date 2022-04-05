Parse.Cloud.define("checkUser", async (request) => {
    const query = new parse.query("User");
    query.equalTo("Username", request.params.Username);
    const results = await query.find();
    const res = [User.get("StocksOwned"), request.params.Username]
    return {
      result: res,
    }
  });