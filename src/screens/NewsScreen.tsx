import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image , ScrollView, TouchableOpacity, Linking} from 'react-native';
import NewsHeading from '../components/NewsHeading';


// Example data for the FlatLists
const exampleDataGeneral = [
   
    {
      id: '4',
      details: 'Delhi Jal Board sets target of 1,000 MGD water supply during summer',
      imageUrl: 'https://media.assettype.com/gomantaktimes%2F2024-03%2F19adfbfd-56bd-4786-a97e-cfb806809c47%2FImp_template_for_GT____2024_03_18T152704_714.jpg?w=1200&auto=format%2Ccompress&fit=max',
      link: 'https://timesofindia.indiatimes.com/city/chennai/israel-ties-up-with-iit-m-to-set-up-water-technology-centre/articleshow/100316448.cms',
    },
    {
      id: '5',
      details: 'Philippines summons China envoy over water cannon attack in South China Sea',
      imageUrl: 'https://static.toiimg.com/thumb/msid-108615496,imgsize-505490,width-400,height-225,resizemode-72/108615496.jpg',
      link: 'https://www.fox10phoenix.com/news/water-conservation-measures-announced-for-grand-canyon-national-park',
    },
    {
      id: '6',
      details: '[Water Plant Updates] Water Treatment Industry to Reach $489.07 Billion by 2029',
      imageUrl: 'https://img.locationscout.net/images/2018-10/nailing-nilgiri-bangladesh_l.jpeg',
      link: 'https://www.cbsnews.com/news/las-vegas-water-conservation-grass/',
    },
    {
      id: '7',
      details: 'Israel ties up with IIT-M to set up water technology centre',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2024/05/01/550x309/A-reservoir-and-treatment-plant-of-the-Delhi-Jal-B_1714587411162.jpg',
      link: 'https://www.hindustantimes.com/cities/delhi-news/delhi-jal-board-sets-target-of-1-000-mgd-water-supply-during-summer-101714587455470.html',
    },
    {
      id: '8',
      details: 'Water conservation measures announced for Grand Canyon National Park',
      imageUrl: 'https://www.aljazeera.com/wp-content/uploads/2024/05/12196825-1714695301.jpg?resize=770%2C513&quality=80',
      link: 'https://www.aljazeera.com/news/2024/5/2/philippines-summons-china-envoy-over-water-cannon-attack-in-south-china-sea',
    },
    {
      id: '9',
      details: 'Las Vegas becomes unlikely model for water conservation',
      imageUrl: 'https://ecoprotection.in/wp-content/uploads/2020/09/3.NPCIlindus.jpeg',
      link: 'https://www.globenewswire.com/en/news-release/2023/06/12/2685992/0/en/Water-Plant-Updates-Water-Treatment-Industry-to-Reach-489-07-Billion-by-2029.html',
    },
    {
      id: '10',
      details: 'Ice Shelves Fracture Under Weight of Meltwater LakesSalem District Collector instructs officials to prioritise drinking water related works',
      imageUrl: 'https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/05/23114251/India-Israel-Relations.jpg',
      link: 'https://www.hindustantimes.com/ht-img/img/2024/05/01/550x309/A-reservoir-and-treatment-plant-of-the-Delhi-Jal-B_1714587411162.jpg',
    },
    {
      id: '11',
      details: 'Improving access to water, sanitation and hygiene can save 1.4 million lives per year, says new WHO report',
      imageUrl: 'https://th.bing.com/th/id/OIP.ORgzmjJEDYgKXi1tCHVwbQAAAA?pid=ImgDetMain',
      link: 'https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/05/23114251/India-Israel-Relations.jpg',
    },
    {
      id: '1',
      details: 'Preserving Paradise: Goa\'s urgent call for water conservation',
      imageUrl: 'https://admin-cires.colorado.edu/sites/default/files/2024-04/Timeplase%20camera%20install-Antarctica-Banwell-2019.jpeg',
      link: 'https://www.gomantaktimes.com/opinion/preserving-paradise-goas-urgent-call-for-water-conservation',
    },
    {
      id: '2',
      details: '\'Save 600 litres per day with small steps\': Bengaluru doctor\'s water saving tips go viral',
      imageUrl: 'https://cmp.smu.edu.sg/sites/cmp.smu.edu.sg/files/styles/large/public/articles/Washing_hands.jpg?itok=4MyNX_XH',
      link: 'https://www.timesofindia.indiatimes.com/city/bengaluru/save-600-liters-per-day-with-small-steps-bengaluru-doctors-water-saving-tips-go-viral/articleshow/108615141.cms',
    },
    {
      id: '3',
      details: 'Coimbatore to get water from Nilgiris to tide over scarcity',
      imageUrl: 'https://www.usnews.com/object/image/0000018e-d3ab-d4e4-a39e-f7bffb6c0000/gettyimages-726771493-1.jpg?update-time=1712948296033&size=responsive970',
      link: 'https://timesofindia.indiatimes.com/city/coimbatore/coimbatore-to-get-water-from-nilgiris-to-tide-over-scarcity/articleshow/109741724.cms',
    },
  ];
const exampleDataTech = [
    {
      id: '1',
      details: 'L’Oréal to acquire Gjosa, environmental water tech startup behind breakthrough Water Saver innovations',
      imageUrl: 'https://th.bing.com/th/id/OIP.PKAmt1NdldpIkkECaAIdpAHaE8?rs=1&pid=ImgDetMain',
      link: 'https://www.loreal-finance.com/eng/news-release/loreal-acquire-gjosa-environmental-water-tech-startup-behind-breakthrough-water-saver',
    },
    {
      id: '2',
      details: 'IndiGo partners with Altered for water conservation on its flights',
      imageUrl: 'https://static.toiimg.com/thumb/msid-107115558,width-1280,height-720,resizemode-4/107115558.jpg',
      link: 'https://timesofindia.indiatimes.com/business/india-business/indigo-partners-with-altered-for-water-conservation-on-flights/articleshow/107115576.cms',
    },
    {
      id: '3',
      details: 'Salad grower trials new water-saving technology',
      imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/ccfc/live/984ed700-ba14-11ee-896d-39d9bd3cadbb.jpg.webp',
      link: 'https://www.bbc.co.uk/news/articles/ckve938gnv7o',
    },
    {
      id: '4',
      details: 'Catalytic membranes for water treatment: Perspectives and challenges',
      imageUrl: 'https://th.bing.com/th/id/OIP.krBLEQn8JmOkSe7Y8N4nXAHaHa?pid=ImgDetMain',
      link: 'https://www.sciencedirect.com/science/article/pii/S2772416624000159',
    },
    {
      id: '5',
      details: 'Spiral Water Technologies introduces new filtration system for biogas production',
      imageUrl: 'https://img.watertechonline.com/files/base/ebm/wto/image/2023/12/65722a53b3b16b001e3a55ed-dairy_farm_spiral_water_t1000_qpx_systems.png?auto=format,compress&fit=max&q=45&w=250&width=250',
      link: 'https://www.watertechonline.com/industry/article/14302475/spiral-water-technologies-introduces-new-filtration-system-for-biogas-production',
    },
    {
      id: '6',
      details: 'India, Israel to jointly develop Center of Water Technology at IIT Madras',
      imageUrl: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-05/17/full/1684322625-0666.jpg?im=FeatureCrop,size=(826,465)',
      link: 'https://www.business-standard.com/india-news/india-israel-to-jointly-develop-center-of-water-technology-at-iit-madras-123051700758_1.html',
    },
    {
      id: '7',
      details: 'Murugappa Water Technology & Solutions, Scalene Livprotec Launch \'Aquatron\'',
      imageUrl: 'https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20231018050054.jpg',
      link: 'https://www.aninews.in/news/business/business/murugappa-water-technology-amp-solutions-scalene-livprotec-launch-aquatron20231018103158',
    },
    {
      id: '8',
      details: 'New water treatment approach helps to avoid harmful chemicals',
      imageUrl: 'https://scx1.b-cdn.net/csz/news/800a/2023/new-water-treatment-ap.jpg',
      link: 'https://phys.org/news/2023-09-treatment-approach-chemicals.html',
    },
    {
      id: '9',
      details: 'Bacteria made to turn sewage into clean water – and electricity',
      imageUrl: 'https://images.newscientist.com/wp-content/uploads/2016/07/27180000/gettyimages-85641887.jpg?width=900',
      link: 'https://www.newscientist.com/article/mg23130840-100-bacteria-made-to-turn-sewage-into-clean-water-and-electricity/',
    },
    {
      id: '10',
      details: 'Voltea Named Breakthrough Water Technology Company of the Year',
      imageUrl: 'https://th.bing.com/th/id/OIP.KhFMXGCMvVwtWegLOA51QgHaHa?pid=ImgDetMain',
      link: 'https://americanlaundrynews.com/node/83267',
    },
    {
      id: '11',
      details: 'New tech could one day scrub ‘forever chemicals’ from your tap water',
      imageUrl: 'https://th.bing.com/th/id/OIP.TmJIZBd5qYKtx-mZOoqPHQHaEK?pcl=1b1a19&pid=ImgDetMain',
      link: 'https://www.washingtonpost.com/climate-solutions/2023/04/16/pfas-water-treatment-filter/',
    },
    {
      id: '12',
      details: 'New nontoxic powder uses sunlight to quickly disinfect contaminated drinking water',
      imageUrl: 'https://news.stanford.edu/wp-content/uploads/2023/05/Cui-water-disinfection-may-2023-705x470.jpg',
      link: 'https://news.stanford.edu/2023/05/18/new-technology-uses-ordinary-sunlight-disinfect-drinking-water/',
    },
    {
      id: '13',
      details: 'How Singapore is turning sewage into ultra-clean water',
      imageUrl: 'https://images.livemint.com/img/2021/08/10/600x338/AFP_9GV88W_1628564796428_1628564814522.jpg',
      link: 'https://www.livemint.com/science/news/how-singapore-is-turning-sewage-into-ultra-clean-water-11628564552806.html',
    },
    {
      id: '14',
      details: 'GE\'s Water & Process Technologies Invests in Demonstrating \'Energy Neutral\' Wastewater Solutions in Conjunction with Ontario\'s University of Guelph',
      imageUrl: 'https://th.bing.com/th/id/OIP.t6Qla2ZUfjp-9_Y4K2ZInwHaFj?pid=ImgDetMain',
      link: 'https://www.ge.com/news/press-releases/ges-water-process-technologies-invests-demonstrating-energy-neutral-wastewater',
    },
    {
      id: '15',
      details: 'New permanent water conservation rules are coming to California — see how your city will be affected',
      imageUrl: 'https://th.bing.com/th/id/OIP.9EDG4ho0nFJRtv-OW0k5kwHaFK?pid=ImgDetMain',
      link: 'https://www.mercurynews.com/2023/08/31/new-permanent-water-conservation-rules-are-coming-to-california-see-how-your-city-will-be-affected/',
    },
    {
      id: '16',
      details: 'Seven regions in England will face severe water stress by 2030 as Brits significantly underestimate their daily water usage',
      imageUrl: 'https://th.bing.com/th/id/OIP.x8DlZebFX0iVvdiHwKptEwHaHa?pid=ImgDetMain',
      link: 'https://www.kingfisher.com/en/media/news/kingfisher-news/2023/seven-regions-in-england-will-face-severe-water-stress-by-2030-a.html',
    },
    {
      id: '17',
      details: 'SRP hosting FREE Water Conservation Expo with classes, freebies and discounts',
      imageUrl: 'https://th.bing.com/th/id/OIP.AyvEG-JDUwCEqEOtKdSSyAHaEF?pid=ImgDetMain',
      link: 'https://www.abc15.com/news/local-news/srp-hosting-free-water-conservation-expo-with-classes-freebies-and-discounts',
    },
    {
      id: '18',
      details: 'Niti panel likely to propose incentives for efficient use of water',
      imageUrl: 'https://th.bing.com/th/id/OIP.TcodSITw9yLGYSEl78Fn7wHaD4?pid=ImgDetMain',
      link: 'https://m.economictimes.com/news/economy/policy/niti-panel-likely-to-propose-incentives-for-efficient-use-of-water/articleshow/99444101.cms',
    },
  ];
  
const renderItem = ({ item }) => (
  <View style={styles.card}>
    <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
    <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
    </TouchableOpacity>
    <View style={styles.cardContent}>
    <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
        <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode="tail">{item.details}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const NewsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>News</Text>
            <Text style={styles.buttonText}>From The Depths Of Atlantis</Text> 
            <Image
        source={require('../images/news.png')} // Replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      />   
        </View>
      {/* Section 1 */}
      <ScrollView >
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tech</Text>
        <FlatList
          data={exampleDataTech}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      
      {/* Section 2 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitleGeneral}>General</Text>
        <FlatList
          data={exampleDataGeneral}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    section: {
      flex: 1,
      marginVertical: 10,
    },
    sectionTitle: {
      fontSize: 25,
      paddingTop: 20,
      paddingHorizontal: 20,
      paddingBottom: 10,
      color: '#2C2C2C',
      fontWeight: '600',
      marginBottom: 10,
    },
    sectionTitleGeneral: {
        fontSize: 25,
 
        paddingHorizontal: 20,
        paddingBottom: 10,
        color: '#2C2C2C',
        fontWeight: '600',
        marginBottom: 10,
      },
    card: {
      backgroundColor: '#DCDCDC',
      borderRadius: 8,
    //   paddingHorizontal:10,
      marginHorizontal: 9,
      width: Dimensions.get('window').width * 0.8, // Adjust card width as needed
      height: 320,
      justifyContent: 'space-between', // Space out content
    },
    cardImage: {
      width: '100%',
      height: '80%',
      borderRadius: 8,
      marginBottom: 10, // Space between image and text
    },
    cardContent: {
      flex: 1,
      justifyContent: 'center',
    },
    cardTitle: {
      paddingHorizontal:10,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#2C2C2C',
      textAlignVertical: 'center',
      textAlign: 'justify', 
      bottom:40,
      overflow: 'hidden', // Hide overflowing text
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      
      height:110,
      paddingTop:30,
      paddingHorizontal: 20,
      backgroundColor: '#fff', // Change to your preferred color
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    
    title: {
      // left:-80,
      top:-20,
      fontSize: 60,
      fontWeight: 'bold',
      color: '#04053fc4',
    },
    buttonText: {
      top:15,
      right:110,
      fontSize: 16,
      color: '#04053fc4',
      // fontWeight:'bold'
    },
      logo: {
        top:-15,
        tintColor:'#8688ff',
        marginHorizontal:-50,
        right:40,
        width: 80, // Adjust the size based on your logo
        height: 80, // Adjust the size based on your logo
      },
  });
  
  
  export default NewsScreen;
  

