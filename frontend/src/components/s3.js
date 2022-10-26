import { S3 } from "aws-sdk";

var s3 = new S3({
    apiVersion: '2006-03-01',
    params: {Bucket: tutorimagesraaga}
  });

console.log(s3);