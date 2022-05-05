const env = process.env;

const config = {
	db: {
		/* do not put password or any sensitive info here, done only for demo */
		host: env.DB_HOST || "manny.db.elephantsql.com",
		port: env.DB_PORT || "5432",
		user: env.DB_USER || "eaoxnbbi",
		password: env.DB_PASSWORD || "eUiYeiuSmCWPkvARHiszxbv7pY66E8nH",
		database: env.DB_NAME || "eaoxnbbi",
	},
};

module.exports = config;
