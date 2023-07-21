import { Image, StyleSheet, Text, View } from "react-native";
import { TweetType } from "../type";
import { Entypo, EvilIcons } from "@expo/vector-icons";

type IconButtonProps = {
  icon: React.ComponentProps <typeof EvilIcons>['name'];
  text?: string | number;
}

const IconButton = ({icon, text}: IconButtonProps) => {
  return(
    <View style={{flexDirection: 'row', alignItems: 'center',}}>
    {/* ICON */}
    <EvilIcons name={icon} size={24} color="gray" />
    {/* NUMBER */}
    <Text style={styles.number}>{text}</Text>
  </View>
  )
}

type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username} · 2h</Text>
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={{ marginLeft: "auto" }}
          />
        </View>

        <Text style={styles.content}>{tweet.content}</Text>

        {tweet.image && (
          <Image source={{ uri: tweet.image }} style={styles.image} />
        )}

        <View style={styles.footer}>
         <IconButton icon="comment" text={tweet.numberOfComments} />
         <IconButton icon="retweet" text={tweet.numberOfRetweets} />
          <IconButton icon="heart" text={tweet.numberOfLikes} />
          {tweet.impressions && <IconButton icon="chart" text={tweet.impressions} />}
          <IconButton icon="share-apple"/>
         
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    backgroundColor: "white",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  username: {
    color: "gray",
    marginLeft: 5,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "600",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 15,
  },
  footer: {
  flexDirection: 'row',
  marginVertical: 5,
  justifyContent: 'space-between',
  },
  number: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Tweet;
