import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View, Animated } from 'react-native';
import { Divider } from 'react-native-elements';
import { useTheme } from '../../context/Theme';
import useFade from '../../hooks/useFade';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../constants';

const CryptoWalletPlaceholder = () => {
  const { theme } = useTheme();
  const fade = useFade();

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
        <Animated.View
          style={{
            width: '30%',
            height: 20,
            borderRadius: 10,
            backgroundColor: theme.colors.seperator,
            opacity: fade,
          }}
        ></Animated.View>
        {/* amount */}
        <Animated.View
          style={{
            width: '50%',
            height: 22,
            borderRadius: 10,
            backgroundColor: theme.colors.seperator,
            opacity: fade,
          }}
        ></Animated.View>
      </View>

      <Divider orientation="horizontal" insetType="middle" />

      {/* chart container */}
      <View style={styles.chartContainer}>
        {/* chart */}
        <Animated.View
          style={{
            width: 210,
            height: 210,
            marginLeft: theme.sizes.padding,
            borderRadius: 250,
            backgroundColor: theme.colors.seperator,
            opacity: fade,
          }}
        ></Animated.View>

        {/* chart legend */}
        <View
          style={{
            height: 250,
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginLeft: theme.sizes.padding,
            paddingVertical: theme.sizes.padding,
          }}
        >
          <View style={styles.legendLine}>
            <Animated.View
              style={[
                styles.legendDot,
                { backgroundColor: theme.colors.seperator, opacity: fade },
              ]}
            />
            <Animated.View
              style={[
                styles.legendText,
                {
                  marginHorizontal: theme.sizes.padding,
                  backgroundColor: theme.colors.seperator,
                  opacity: fade,
                },
              ]}
            />
          </View>
          <View style={styles.legendLine}>
            <Animated.View
              style={[
                styles.legendDot,
                { backgroundColor: theme.colors.seperator, opacity: fade },
              ]}
            />
            <Animated.View
              style={[
                styles.legendText,
                {
                  marginHorizontal: theme.sizes.padding,
                  backgroundColor: theme.colors.seperator,
                  opacity: fade,
                },
              ]}
            />
          </View>
          <View style={styles.legendLine}>
            <Animated.View
              style={[
                styles.legendDot,
                { backgroundColor: theme.colors.seperator, opacity: fade },
              ]}
            />
            <Animated.View
              style={[
                styles.legendText,
                {
                  marginHorizontal: theme.sizes.padding,
                  backgroundColor: theme.colors.seperator,
                  opacity: fade,
                },
              ]}
            />
          </View>
          <View style={styles.legendLine}>
            <Animated.View
              style={[
                styles.legendDot,
                { backgroundColor: theme.colors.seperator, opacity: fade },
              ]}
            />
            <Animated.View
              style={[
                styles.legendText,
                {
                  marginHorizontal: theme.sizes.padding,
                  backgroundColor: theme.colors.seperator,
                  opacity: fade,
                },
              ]}
            />
          </View>
        </View>
      </View>

      <Divider orientation="horizontal" insetType="middle" />

      {/* list container */}
      <View style={styles.listContainer}>
        {/* list header */}
        <Animated.View
          style={[
            styles.listContainerHeader,
            {
              backgroundColor: theme.colors.seperator,
              opacity: fade,
            },
          ]}
        />

        {/* list content */}
        <ScrollView style={{ width: '100%' }}>
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
              <View style={{ flex: 1 }}>
                <Animated.View
                  style={[
                    styles.listElementText,
                    {
                      width: '70%',
                      backgroundColor: theme.colors.seperator,
                      marginLeft: theme.sizes.padding,
                      opacity: fade,
                    },
                  ]}
                />
              </View>
              <View style={{ flex: 4, alignItems: 'flex-end' }}>
                <Animated.View
                  style={[
                    styles.listElementText,
                    {
                      width: '60%',
                      backgroundColor: theme.colors.seperator,
                      opacity: fade,
                    },
                  ]}
                />
              </View>
              <View
                style={{
                  flex: 3,
                  alignItems: 'flex-end',
                }}
              >
                <Animated.View
                  style={[
                    styles.listElementText,
                    {
                      width: '60%',
                      backgroundColor: theme.colors.seperator,
                      marginHorizontal: theme.sizes.padding,
                      marginRight: theme.sizes.padding,
                      opacity: fade,
                    },
                  ]}
                />
              </View>
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
          marginLeft: theme.sizes.padding * 3,
          marginTop: theme.sizes.padding * 2,
        }}
      >
        {/* info icon */}
        <Animated.View
          style={{
            width: 25,
            height: 25,
            borderRadius: 25,
            backgroundColor: theme.colors.seperator,
            opacity: fade,
          }}
        />
        {/* info text */}
        <Animated.View
          style={{
            marginLeft: theme.sizes.padding,
            height: 20,
            width: 120,
            borderRadius: 10,
            backgroundColor: theme.colors.seperator,
            opacity: fade,
          }}
        />
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
    width: '90%',
    marginHorizontal: '5%',
    alignItems: 'center',
    marginTop: 15,
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
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  listElementText: {
    width: '30%',
    height: 14,
    borderRadius: 10,
  },
  legendLine: {
    width: '90%',
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  legendDot: {
    width: 15,
    height: 15,
    borderRadius: 15,
  },
  legendText: {
    flex: 1,
    height: 15,
    borderRadius: 10,
  },
});
