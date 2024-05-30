import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { TabNavigator, TabBar } from 'react-navigation';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Linda Magdalena</Text>
        <Text style={styles.greeting}>Good morning Linda!</Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput placeholder="Find your task..." style={styles.searchInput} />
      </View>
      <View style={styles.servicesList}>
        <FlatList
          data={services}
          renderItem={({ item }) => (
            <View style={styles.serviceItem}>
              <Text style={styles.serviceName}>{item.name}</Text>
              <Text style={styles.serviceDescription}>{item.description}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.recentTasksList}>
        <FlatList
          data={recentTasks}
          renderItem={({ item }) => (
            <View style={styles.recentTaskItem}>
              <Text style={styles.recentTaskName}>{item.name}</Text>
              <Text style={styles.recentTaskDescription}>{item.description}</Text>
              <Text style={styles.recentTaskStatus}>{item.status}</Text>
            </View>
          )}
        />
      </View>
      <TabNavigator>
        <TabNavigator.Screen name="Today" component={TodayScreen} />
        <TabNavigator.Screen name="Upcoming" component={UpcomingScreen} />
        <TabNavigator.Screen name="Completed" component={CompletedScreen} />
      </TabNavigator>
      <TabBar />
    </View>
  );
};

const services = [
  { name: 'Jasa Titip', description: 'List Driver' },
  { name: 'Jasa Antar Jemput', description: 'List Driver' },
];

const recentTasks = [
  { name: 'Jasa Titip', description: 'Makan', status: 'In Progress' },
  { name: 'Jasa Antar Jemput', description: 'Driver name', status: 'In Progress' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 8,
  },
  greeting: {
    fontSize: 16,
    color: '#7C8083',
  },
  searchBar: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#7C8083',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  servicesList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  serviceItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDEE',
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '500',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#7C8083',
  },
  recentTasksList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  recentTaskItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDEE',
  },
  recentTaskName: {
    fontSize: 16,
    fontWeight: '500',
  },
  recentTaskDescription: {
    fontSize: 14,
    color: '#7C8083',
  },
  recentTaskStatus: {
    fontSize: 14,
    color: '#0081F1',
  },
});

export default DashboardScreen;