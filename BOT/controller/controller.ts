import * as mongoose from "mongoose";
import UserSchema, { IFollower } from "./../model/model";

const FollowingDb = mongoose.model<IFollower>("Following", UserSchema);
const FollowHistoryDb = mongoose.model<IFollower>("Following-History", UserSchema);

const AddFollowing = async (username: string) => {
  let dateAdded = new Date();
  let newFollower = new FollowingDb({ 
    username: username,
    dateAdded: dateAdded
  });

  newFollower.save(function(err: any, follower: mongoose.Document) {
    if(err) {
      console.error(err);
    } else {
      return follower;
    }
  })
};

const GetFollowing = async () => {
  FollowingDb.find({}, function(err: any, followers: IFollower[]) {
    if(err) {
      console.error(err);
    } else {
      return followers;
    }
  })
};

const Unfollow = async (username: string) => {
  FollowingDb.findOneAndRemove(
    { username: username },
    function(err: any, follower: IFollower) {
      let followed = new FollowHistoryDb({})
    }
  )
}

export { AddFollowing, GetFollowing };