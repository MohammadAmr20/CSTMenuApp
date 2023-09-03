import Menu from "../menu.json";
import Section from "../Component/Section";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Keyboard,
  Pressable,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

export default function Explore() {
  const Sections = Menu.menu_sections;
  const [search, setSearch] = useState("");
  const [AllVisible, setVisibility] = useState(true);
  const [showSection, setShowSection] = useState(Sections.map(() => true));
  useEffect(() => {
    setShowSection(Sections.map(() => true));
    setVisibility(true);
  }, [Sections]);

  const handleIconPress = () => {
    Keyboard.dismiss();
    setSearch("");
  };
  const handlePress = (index) => {
    const newShowSection = [...showSection];
    let Visible = AllVisible;
    if (!AllVisible && newShowSection[index]) {
      Visible = true;
      newShowSection.fill(true);
    } else {
      Visible = false;
      newShowSection.fill(false);
      newShowSection[index] = true;
    }
    setShowSection(newShowSection);
    setVisibility(Visible);
  };
  const filterSections = () => {
    return Sections.filter((section, index) => showSection[index]);
  };
  const SectionFilter = filterSections();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.parentSearch}>
        <TextInput
          style={styles.Search}
          placeholder="Search here..."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity
          style={styles.closeButtonParent}
          onPress={handleIconPress}
        >
          <Image
            style={styles.closeButton}
            source={
              search === ""
                ? require("../assets/search.png")
                : require("../assets/close.png")
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.sectionButtons}>
        {Sections.map((section, index) => {
          return (
            <Pressable
              style={[
                styles.filterButton,
                showSection[index] && !AllVisible && styles.pressablePressed,
              ]}
              onPress={() => handlePress(index)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  showSection[index] && !AllVisible && styles.pressableText,
                ]}
              >
                {section.section_name}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <View>
        {SectionFilter.map((section, index) => {
          return (
            <View>
              <Section
                section={section}
                search={search}
                key={section.section_name}
              />
              {index !== SectionFilter.length - 1 ? (
                <>
                  <View style={styles.hr}></View>
                </>
              ) : null}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C18F6D20",
  },
  parentSearch: {
    height: 45,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 8,
    width: "90%",
    marginHorizontal: 20,
    marginVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hr: {
    height: 1,
    width: "70%",
    backgroundColor: "#635A57A0",
    marginLeft: 65,
    marginTop: 25,
    marginBottom: 28,
  },
  sectionButtons: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    marginBottom: 30,
    marginLeft: 12.75,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 2,
    alignItems: "center",
    marginLeft: 15,
    backgroundColor: "transparent",
  },
  pressablePressed: {
    backgroundColor: "#0A0201",
  },
  pressableText: {
    fontWeight: "bold",
    color: "#FEFEFE",
  },
  filterButtonText: {
    fontWeight: "bold",
  },
  Search: {
    width: "90%",
  },
  closeButton: {
    height: 16,
    width: 16,
  },
  closeButtonParent: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
});
