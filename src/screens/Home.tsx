import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {Screens} from '@navigation/types';
import Layout from '@src/components/Layout';
import {CustomText} from '@src/components/CustomText';
import {colors, font, PADDING} from '@src/commons';
import {ResultsLoader} from '@src/components/ResultsLoader';
import {getCoins} from '@src/api';
import {formatValue} from '@src/utils';
import Input from '@src/components/Input';

type HomeProps = NativeStackScreenProps<Screens, 'Home'>;

interface FormattedResponse {
  key: string;
  name: string;
  rate: number;
}

export const Home: React.FC<HomeProps> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coins, setCoins] = useState<FormattedResponse[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<FormattedResponse[]>([]);
  const [search, setSearch] = useState('');

  const list = useMemo(
    () => (filteredCoins.length ? filteredCoins : coins),
    [filteredCoins, coins],
  );

  const fetchCoins = async () => {
    setIsLoading(true);
    const [error, response] = await getCoins();
    setIsLoading(false);

    if (response) {
      setCoins(
        // @ts-ignore
        Object.entries(response?.rates).map(([name, obj]) => ({name, ...obj})),
      );
    }
    if (error) {
    }
  };

  const handleSearch = (keyword: string) => {
    setSearch(keyword);

    if (!keyword) {
      setFilteredCoins([]);
    } else {
      const filteredList = coins.filter(c =>
        c.name?.toLowerCase().startsWith(keyword.toLowerCase()),
      );
      setFilteredCoins(filteredList);
    }
  };

  const handleNav = (item: FormattedResponse) => {
    navigation.navigate('CoinDetail', {name: item.name, rate: item.rate});
  };

  const renderItem = ({item}: any) => {
    const coin = item as FormattedResponse;
    return (
      <TouchableOpacity
        style={styles.listItem}
        activeOpacity={0.8}
        testID="CoinItemCard"
        onPress={() => handleNav(coin)}>
        <CustomText isMedium>{coin.name}</CustomText>

        <CustomText style={styles.mLeftAuto} isBold>
          {coin.name.includes('NGN')
            ? `\u20A6${formatValue(coin.rate)}`
            : `\u0024${formatValue(coin.rate)}`}
        </CustomText>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <Layout
      noPadding={true}
      header={
        <View style={styles.header}>
          <CustomText size={font.size.h2} isBold>
            Coins
          </CustomText>
        </View>
      }>
      {isLoading ? (
        <ResultsLoader />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          scrollEventThrottle={16}
          bouncesZoom={false}
          alwaysBounceVertical={false}
          keyExtractor={(_item, index) => `${index}`}
          contentContainerStyle={styles.listContainer}
          keyboardDismissMode="interactive"
          refreshControl={
            <RefreshControl refreshing={!!isLoading} onRefresh={fetchCoins} />
          }
          ListHeaderComponent={
            <Input
              value={search}
              onChangeText={handleSearch}
              placeholder="Search coin"
              mBottom={16}
              testID="SearchInput"
            />
          }
          testID="CoinsListView"
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: PADDING,
    borderBottomColor: colors.neutral.inactive,
    borderBottomWidth: 0.7,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.neutral.bg,
    borderColor: colors.neutral.borders,
    marginBottom: 12,
    padding: 16,
  },
  listContainer: {
    paddingHorizontal: PADDING,
    paddingTop: PADDING,
    paddingBottom: 50,
  },
  mLeftAuto: {marginLeft: 'auto'},
});
