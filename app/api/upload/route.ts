import {
  createUploadRouteHandler,
  type Router,
  route,
} from "better-upload/server";
import { minio } from "better-upload/server/helpers";

const client = minio({
  region: "us-east-1",
  endpoint: "https://minio-o8csgg4wsgsg84wk8ksssogs.millennial-clothing.com",
  accessKeyId: "SCmoSRFYPHu4Suoy",
  secretAccessKey: "s6zxMU3ehiIHm8IhjLqt1GJ4oTTHaRyZ",
});

const router: Router = {
  client,
  bucketName: "open-share",
  routes: {
    demo: route({
      multipleFiles: true,
      maxFiles: 4,
      maxFileSize: 1024 * 1024 * 1024,
    }),
  },
};

export const { POST } = createUploadRouteHandler(router);
