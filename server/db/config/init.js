/* Inserts Dummy Data into DB */

import model from "../models";
import InitialData from "./helpers/InitialData";

const initDB = () => {

  /* User model data 생성 */
  new model.User(
    { username: "Lenny Kim",
      email: "idforcoding@gmail.com",
      password: "12345678"
    }).save().then((model) => console.log("Created User model: ", model.attributes.username));

  /* Project model data 생성 */
  InitialData.ProjectData.forEach((item) => {
    new model.Project(item).save()
    .then((model) => console.log("Created Project model", model.attributes.title));
  });

  /* userProject model data 생성 */
  InitialData.UserProjectData.forEach((item)=>{
    new model.UserProject(item).save()
    .then((model) => console.log("Created userProject model", model.attributes.id));
  });

  /* Post model data 생성 */
  InitialData.PostData.forEach((item)=>{
    new model.Post(item).save()
    .then((model) => console.log("Created Post model", model.attributes.text));
  });


  /* PostImage model data 생성 */
  InitialData.PostImageData.forEach((item)=>{
    new model.PostImage(item).save()
    .then((model)=>console.log("Created PostImage model", model.attributes.url));
  });
};

export default initDB;
