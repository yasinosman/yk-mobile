import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { BLUE } from '../common/colors';
import { DEVICE_WIDTH } from '../common/dimensions';
import MenuContainer from '../components/MenuContainer';
import Tag from '../components/Tag';
import { useTheme } from '../context/Theme';

const Insurances = () => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    wrapper: {
      width: DEVICE_WIDTH,
      backgroundColor: theme.colors.bg,
    },
  });
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <MenuContainer
        title="Başvurular"
        buttons={[
          {
            title: 'Zorunlu Deprem Sigortası (DASK)',
          },
          {
            title: 'Kasko Sigortası',
          },
          {
            title: 'Tamamlayıcı Sağlık Sigortası',
            tag: (
              <Tag
                title="Check-up Hediyeli"
                containerStyles={{ backgroundColor: BLUE }}
              />
            ),
          },
          {
            title: 'Dijital Koruma Sigortası',
          },
        ]}
      />
      <MenuContainer
        title="Poliçe İşlemleri"
        buttons={[
          {
            title: 'Sigorta Tekliflerim',
          },
          {
            title: 'Sigorta Poliçelerim',
          },
        ]}
      />
    </ScrollView>
  );
};

export default Insurances;

const styles = StyleSheet.create({
  wrapper: {
    width: DEVICE_WIDTH,
  },
});
