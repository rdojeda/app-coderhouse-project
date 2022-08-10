import 'dotenv/config'


export default {
  mongoDB: {
    URL: "mongodb+srv://Dbojedaweb:rdo0j3d6@cluster0.tsqrh.mongodb.net/ecommerce?retryWrites=true&w=majority",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};



/*
export default {
  mongoDB: {
            URL: `mongodb+srv://${process.env.DB_USER_MONGO}:${
                (process.env.DB_PASSWORD_MONGO)
                }@cluster0.tsqrh.mongodb.net/${process.env.DB_NAME_MONGO}?retryWrites=true&w=majority`,
            options: {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                    }
      }
};
*/
