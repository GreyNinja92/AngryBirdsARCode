import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  VStack,
  Flex,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import { ArrowRightIcon, TriangleUpIcon } from "@chakra-ui/icons";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  const [isLargerThan440] = useMediaQuery("(min-width: 440px)");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Angry Birds AR</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={"https://i.ytimg.com/vi/2U3Sl41747s/maxresdefault.jpg"}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["AR Gaming", "Angry Birds"]} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              Student's Choice
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            CS428 <br /> <i>By Saksham Khatod</i>
          </Text>
        </Box>
      </Box>
      <VStack paddingTop="40px" spacing="4" alignItems="flex-start">
        <Heading as="h2">Introduction to what it is</Heading>
        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Text as="p" fontSize="lg">
            Angry Birds is a casual video puzzle game released in 2009 for iOS
            and Maemo devices by Rovio Entertainment. After selling 12 million
            copies on iOS, the game was ported to other touchscreen-based
            platforms. The gameplay comprises using a slingshot and a flightless
            bird to destroy structures where the pigs reside. The slingshot
            allows for unlimited angles & momentum of motion allowing the
            players to target almost any point of the structure they want. Best
            players can finely tune the angle & the momentum of the slingshot to
            get the bird to hit the most vulnerable point of the structures.
          </Text>
          <Image
            borderRadius="lg"
            src={"https://i.gifer.com/MQGL.gif"}
            alt="some good alt text"
            objectFit="contain"
            marginLeft={isLargerThan440 ? "20px" : "0px"}
          />
        </Flex>
        <Text as="p" fontSize="lg">
          You have a wide variety of birds to choose from, each with its special
          ability. In newer versions of the game, each bird has a level. The
          Higher the level, the stronger the birds get. There are several birds
          to choose from e.g. Red, Blue, Chuck, Bomb, Matilda, Hal, Terence,
          Bubbles, Stella, Tony, Silver, Ice Bird, Judge, Cyrus & Mime. For
          newer versions of the game, you can even use spells to make the job of
          bringing down these pig structures a lot easier e.g. Golden Duck, Ice,
          Chilli, Pig Inflator & Mighty Eagle. Each spell affects the gameplay
          in its way making the level easier for some or all bird types e.g. the
          ice spell converts all wooden & stone structures to ice making the
          blue bird perfect for the attack as it penetrates through ice like a
          hot knife through butter.
        </Text>
        <Text as="p" fontSize="lg">
          These structures can be as basic as scaffolding or as advanced as a
          stone-constructed castle. Depending on the material used, the effort &
          the bird power required to break through it varies. Newer versions of
          the game even include pigs with anti-aircraft weapons to turn the
          incoming birds into other objects e.g. some guns wielded by the pigs
          can turn incoming birds into stones rendering them unable to use their
          special abilities.
        </Text>
        <Text as="p" fontSize="lg">
          In 2017, ARKit was introduced on iOS which abstracted most of the AR
          computations allowing the developers to create AR games with little
          effort. 3 months later, ARCore was introduced on Android which
          effectively does the same thing for Android devices. Makers of several
          hugely popular titles e.g. Pokemon Go quickly switched to using these
          newly released frameworks when they were publicly released. The AR
          tracking was much more reliable and the objects stay fixed in their
          real-world positions even when the user moved the camera around. It
          was also much faster in CNN computations and was considerably more
          battery efficient.
        </Text>
        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Image
            htmlWidth="500px"
            borderRadius="lg"
            src={
              "https://o.aolcdn.com/images/dimse/5845cadfecd996e0372f/b04ace1648df985a9d76c3d589feafa3904dc489/cmVzaXplPTIwMDAlMkMyMDAwJTJDc2hyaW5rJmltYWdlX3VyaT1odHRwcyUzQSUyRiUyRnMueWltZy5jb20lMkZvcyUyRmNyZWF0ci11cGxvYWRlZC1pbWFnZXMlMkYyMDE5LTAzJTJGNGIxZmYyNjAtNDlmOS0xMWU5LWJiZWMtOWI4M2QxMDFlODNhJmNsaWVudD1hMWFjYWMzZTFiMzI5MDkxN2Q5MiZzaWduYXR1cmU9YTg0YWZlNTBkMWY0YjU0NjIwYTliOTYzZTE0MTA5ZTZkMWY3ZjEwNg=="
            }
            alt="some good alt text"
            objectFit="contain"
            marginRight={isLargerThan440 ? "20px" : "0px"}
          />
          <Text as="p" fontSize="lg">
            <br />
            Shortly after these announcements, the makers of the Angry Birds
            Franchise decided to create Angry Birds AR using these technologies.
            Angry Birds AR brings the 2d pig structures into real-life 3d where
            the cameras allow for unlimited exploration inside the pig
            structures and around the environment. The users can shoot birds and
            see the pig castles fall in their environment e.g. their coffee
            table.
          </Text>
        </Flex>
      </VStack>
      <VStack paddingTop="40px" spacing="4" alignItems="flex-start">
        <Heading as="h2">Why is it a good use of VR or AR?</Heading>
        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Text as="p" fontSize="lg">
            As mentioned above, the previous versions of the game were
            restricted to 2d displays on smartphones, tablets & computers. When
            the pig castle is placed in the user’s environment, it adds a whole
            new dimension of interactivity. The Camera can also be used to
            change the position of the slingshot to e.g. strike the pig castle
            from behind or from above. This version removes a lot of limits
            which existed in the previous 2d versions of the game and enables
            far more immersive gameplay. Rovio, however, only allows the user to
            select from 3 birds i.e. Red, Blue & Chuch instead of the 10
            different options available in other 2d versions of the game. Also,
            spells available in other games are nowhere to be found in the AR
            version. Still, this game is far more captivating than its
            predecessors because of its brilliant use of Augmented Reality.
          </Text>
          <Image
            htmlHeight="347px"
            htmlWidth="463px"
            borderRadius="lg"
            src={
              "https://cdn.toucharcade.com/wp-content/uploads/2019/05/angry-birds-ar-unlock.jpg"
            }
            alt="some good alt text"
            objectFit="contain"
            marginLeft={isLargerThan440 ? "20px" : "0px"}
          />
        </Flex>

        <Text as="p" fontSize="lg">
          The User can now go closer to the castle and see the inside of the
          structure. In the 2d versions of the game, all the pigs in the castle
          were visible on the screen. When Rovio Entertainment created the AR
          Version, they decided to hide some pigs inside these 3d structures to
          motivate the user to explore the environment with their cameras. If
          the user takes out all visible pigs and the level still does not
          finish, that means there is a pig hidden inside the wooden castle that
          they can’t see. So the user is pushed to bring their cameras closer to
          the environment and explore the inside of the castles until they find
          the hidden pig. Then, they can plan their strategy on defeating it by
          striking the points of the castle which will render an indirect blow
          to the pig. This creates a new degree of immersion and makes this game
          a fantastic use of AR.
        </Text>
        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Image
            boxSize={isLargerThan440 ? "500px" : "300px"}
            borderRadius="lg"
            src={
              "https://i.insider.com/55ba4055371d22a40e8bb04d?width=1000&format=jpeg&auto=webp"
            }
            alt="some good alt text"
            objectFit="contain"
          />
          {isLargerThan768 ? (
            <ArrowRightIcon w={12} h={6} marginTop="15rem" />
          ) : (
            <TriangleUpIcon w={12} h={6} alignSelf="center" />
          )}
          <Image
            boxSize={isLargerThan440 ? "500px" : "300px"}
            borderRadius="lg"
            src={
              "https://cdn.toucharcade.com/wp-content/uploads/2019/05/angry-birds-ar-gameplay.jpg"
            }
            alt="some good alt text"
            objectFit="contain"
          />
        </Flex>
        <Text as="p" fontSize="lg">
          Since the application is built on top of ARKit, it automatically
          supports LiDAR Sensors found in some iOS Devices. Normally, Angry
          Birds AR requires a setup process when running on devices with normal
          camera modules. The Setup Process involves waving your phone camera
          around the environment enough times until the algorithm can accurately
          recreate the environment as a 3d model and use that to place the model
          in the real environment. This setup process is what enables the
          gameplay to be relatively stable when roaming around the environment
          and shooting birds. The Pigs & their structures stay attached to their
          real-world coordinates even when they’re outside of the camera’s field
          of view. This entire setup process is not required when we have access
          to Light Detection and Ranging sensors.
        </Text>
        <Text as="p" fontSize="lg">
          LiDAR automatically provides ground-truth depth data to the phone and
          requires zero use of the camera’s images for depth estimation. This
          means that the gameplay can be started right after launching the
          application. This pig castle automatically respects the boundaries of
          the real-world environment without requiring the user to go through
          the setup process. The gameplay is also incredibly stable, much more
          than using a traditional camera system which was already far superior
          to other games which implemented the AR features without ARKit. This
          also reduces the load on the SOC (System on a chip) of the mobile
          device leading to better battery life and longer gameplay times.
        </Text>
      </VStack>
      <VStack paddingTop="40px" spacing="4" alignItems="flex-start">
        <Heading as="h2">Who are its intended users?</Heading>
        <Text as="p" fontSize="lg">
          Angry Birds has always been targeted toward casual mobile gamers. This
          includes everyone from kids having fun to adults using it as a way to
          kill time. Angry Birds utilizes cartoonish graphics for the birds,
          pigs, structures, slingshot, etc. After the bird takes any of the
          pigs, the pigs simply disappear from the environment. There’s no trace
          of blood in the game and there’s no mention of killing the pigs
          anywhere in the introduction. The Documentation simply mentions
          “defeating” the pigs. This is done deliberately to make this game
          marketable towards kids. To make sure this game can be played by
          almost any modern mobile gamer, this game is perfectly tuned to not
          tax the system too much which allows the title to run on a broad range
          of devices with varying computational abilities.
        </Text>
        <Text as="p" fontSize="lg">
          The 2d versions of the game require very little CPU & GPU power to run
          and so can be played on a multitude of devices. The AR version of
          Angry Birds requires a lot more computations in the background for the
          game to work. Firstly, you require an ARCore or ARKit-compatible
          device. Secondly, you need enough CPU & GPU performance to handle this
          AR title. Thirdly, you need a mobile device with a decent camera (or a
          LiDAR sensor) for accurate depth mapping. If you’ve bought a mobile
          device anytime in the past few years, you’ll easily satisfy all three
          of these requirements. Most people that play games on their
          smartphones today possess a smartphone that is capable enough to run
          Angry Birds AR.
        </Text>
      </VStack>
      <VStack paddingTop="40px" spacing="4" alignItems="flex-start">
        <Heading as="h2">
          What are the issues (positive and negative) with it?
        </Heading>
        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Box>
            <Text as="p" fontSize="lg">
              <br />
              <br />
              Angry Birds AR builds upon the super popular Angry Birds game and
              adds a whole new dimension of interactivity to it. It is a massive
              upgrade over the traditional 2d game as it allows for a lot more
              user involvement in the game. The User can change the height of
              the slingshot and may decide to attack the castle from the top
              instead of from the front. The User can bring the slingshot closer
              to take direct aim at a particular pig. If the user destroys the
              pig structure, the way the structure falls and its pieces drop,
              both respect the dimensions of the actual real-world environment.
              E.g. if the pig castle completely covers your coffee table and the
              birds destroy it, the castle will explode and send its wooden
              pieces to the floor of the living room instead of the top of the
              coffee table where the castle was situated.
            </Text>
            <Text as="p" fontSize="lg">
              <br />
              These different types of interactions with the game environment
              make the game incredibly captivating, especially for users who
              haven’t experienced Augmented Reality before. It also shows what’s
              possible with Augmented Reality in gaming. The fact that such an
              experience can be programmed relatively easily thanks to ARKit &
              ARCore and can be played on countless devices will motivate the
              rest of the gaming industry to venture into AR and try to port
              their gaming titles to it.
            </Text>
          </Box>
          <Image
            boxSize="500px"
            borderRadius="lg"
            src={"https://media.giphy.com/media/3d4GDnyFXHClmudorG/giphy.gif"}
            alt="some good alt text"
            objectFit="contain"
            marginLeft={isLargerThan440 ? "20px" : "0px"}
          />
        </Flex>

        <Text as="p" fontSize="lg">
          Angry Birds AR is not without its disadvantages. First, although the
          game can be played on pretty much every modern device, to experience
          it in the best way, you need a LiDAR Sensor. The Pig Structures, the
          birds & the interface are incredibly stable when the application is
          fed the ground truth data captured by these sensors. LiDAR-enabled
          devices also don’t require the initial setup which reduces the time
          spent before the user can start playing games. Devices with
          traditional camera modules require tedious setup which can take
          multiple tries for the application to detect the floor and overlay the
          interface, pig’s structure on top of it. Only mobile devices shipping
          in volume with LiDAR sensors are higher-end models of iPhones & iPads
          which aren’t cheap. This creates a high financial barrier for anyone
          who wants to experience Angry Birds AR in the most optimal way.{" "}
        </Text>
        <Text as="p" fontSize="lg">
          Another disadvantage is one shared by all AR games that run on mobile
          devices. Holding your phone and exploring the environment for short
          levels is great. However, as the levels progressively get more
          difficult, the time taken to complete also increases making some users
          experience fatigue or tiredness from holding their phones and roaming
          around in their environment while having their eyes locked onto the
          screen of their devices. This puts an inherent limit on how creative
          the game developers can get in their levels as the level needs to be
          easy enough to let the user clear it in very little time. The future
          of all AR applications is Eyewear. This will remove this barrier as
          there’ll be no need to hold a mobile device of any kind and the user
          can experience the game hands-free.
        </Text>
      </VStack>
      <VStack paddingTop="40px" spacing="4" alignItems="flex-start">
        <Heading as="h2">Citations</Heading>
        <Text as="p" fontSize="lg">
          Youtube Video -{" "}
          <a href="https://www.youtube.com/watch?v=2U3Sl41747s">
            https://www.youtube.com/watch?v=2U3Sl41747s
          </a>
        </Text>
        <Text as="p" fontSize="lg">
          Wikipedia -{" "}
          <a href="https://en.wikipedia.org/wiki/Angry_Birds">
            https://en.wikipedia.org/wiki/Angry_Birds
          </a>
        </Text>
        <Text as="p" fontSize="lg">
          Angry Birds Website -{" "}
          <a href="https://www.angrybirds.com/">https://www.angrybirds.com/</a>
        </Text>
      </VStack>
    </Container>
  );
};

export default ArticleList;
