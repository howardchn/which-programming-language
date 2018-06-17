import AV from 'leancloud-storage';

const { Query, User } = AV;
AV.init('RRfQUBeDJEwCIoCtSAs7rnaU-gzGzoHsz', 'CDKxBcdvakMOmLbD2LpxTYvc');

export default AV.Object.extend('languages');
