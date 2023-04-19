require('dotenv').config();
require('@babel/register');
const { PORT } = process.env;










app.listen(PORT, () => console.log(`Server started at ${PORT}`));