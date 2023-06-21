const mongoose = require('mongoose');

const url = 'mongodb+srv://enmanuelpj:wabisabi@manutest.uh8chgr.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connection done succesfully')).catch((e)=> console.log('Error', e))