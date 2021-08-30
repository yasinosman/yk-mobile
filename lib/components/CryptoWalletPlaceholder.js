import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { useTheme } from '../../context/Theme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../constants';

const CryptoWalletPlaceholder = () => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor: theme.colors.bg,
        },
      ]}
    >
      {/* title container */}
      <View style={styles.titleContainer}>
        {/* key */}
        <View
          style={{
            width: '30%',
            height: 20,
            borderRadius: 10,
            backgroundColor: theme.colors.seperator,
          }}
        ></View>
        {/* amount */}
        <View
          style={{
            width: '60%',
            height: 22,
            borderRadius: 10,
            backgroundColor: theme.colors.seperator,
          }}
        ></View>
      </View>

      <Divider orientation="horizontal" insetType="middle" />

      {/* chart container */}
      <View style={styles.chartContainer}>
        {/* chart */}
        <View
          style={{
            width: 250,
            height: 250,
            borderRadius: 250,
            backgroundColor: theme.colors.seperator,
          }}
        ></View>

        {/* chart legend */}
        <View
          style={{
            height: 250,
            flex: 1,
            backgroundColor: 'red',
          }}
        ></View>
      </View>

      <Divider orientation="horizontal" insetType="middle" />

      {/* list container */}
      <View style={styles.listContainer}>
        {/* list header */}
        <View
          style={[
            styles.listContainerHeader,
            {
              backgroundColor: theme.colors.seperator,
              opacity: 0.7,
            },
          ]}
        >
          <View
            style={[
              styles.listContainerHeaderText,
              { backgroundColor: theme.colors.seperator },
            ]}
          ></View>
          <View
            style={[
              styles.listContainerHeaderText,
              { backgroundColor: theme.colors.seperator },
            ]}
          ></View>
          <View
            style={[
              styles.listContainerHeaderText,
              { backgroundColor: theme.colors.seperator },
            ]}
          ></View>
        </View>

        {/* list content */}
        <ScrollView>
          {[1, 2, 3, 4].map(i => (
            <View
              style={[
                styles.listElementContainer,
                {
                  backgroundColor:
                    i % 2 !== 0 ? theme.colors.highlight : theme.colors.bg,
                },
              ]}
              key={i}
            >
              <View
                style={[
                  styles.listElementText,
                  {
                    width: '5%',
                    backgroundColor: theme.colors.seperator,
                  },
                ]}
              ></View>

              <View
                style={[
                  styles.listElementText,
                  {
                    width: '10%',
                    backgroundColor: theme.colors.seperator,
                  },
                ]}
              ></View>
              <View
                style={[
                  styles.listElementText,
                  {
                    width: '20%',
                    backgroundColor: theme.colors.seperator,
                  },
                ]}
              ></View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* info */}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: theme.sizes.padding,
        }}
      >
        {/* info icon */}
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 25,
            backgroundColor: theme.colors.seperator,
          }}
        ></View>
        {/* info text */}
        <View
          style={{
            marginLeft: theme.sizes.padding,
            height: 20,
            width: 80,
            backgroundColor: theme.colors.seperator,
          }}
        ></View>
      </View>
    </View>
  );
};

export default CryptoWalletPlaceholder;

const styles = StyleSheet.create({
  wrapper: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
  },
  titleContainer: {
    width: '90%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: DEVICE_HEIGHT * (3 / 100),
  },
  chartContainer: {
    height: 250,
    width: '95%',
    marginHorizontal: '2.5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: DEVICE_HEIGHT * (2 / 100),
  },
  listContainer: {
    height: DEVICE_HEIGHT * (25 / 100),
    width: '90%',
    marginHorizontal: '5%',
    alignItems: 'center',
    marginTop: 15,
    marginVertical: DEVICE_HEIGHT * (5 / 100),
  },
  listContainerHeader: {
    width: '100%',
    height: 40,
    marginHorizontal: '2.5%',
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  listContainerHeaderText: {
    width: '30%',
    height: 18,
  },
  listElementContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  listElementText: {
    width: '30%',
    height: 14,
  },
});
