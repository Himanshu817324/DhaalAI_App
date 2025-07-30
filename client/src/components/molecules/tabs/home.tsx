import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {iconMap} from '../../../constants/iconMap';

const HomeScr = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/home/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.avatar} />
            <Text style={styles.title}>Dhaal.io</Text>
            <View style={styles.icons}>
              <Image source={require('../../../assets/icons/home/bell.png')} style={styles.icon} />
              <Image source={require('../../../assets/icons/home/profile.png')} style={styles.icon} />
            </View>
          </View>

          {/* Welcome */}
          <Text style={styles.greeting}>
            👋 Hello There,{'\n'}
            <Text style={styles.name}>Tushar Singh</Text>
          </Text>

          {/* Actions */}
          <Text style={styles.sectionTitle}>Actions</Text>
          <View style={styles.actions}>
            <ActionButton title="DeepFake" icon="deepseek.png" />
            <ActionButton title="Insuarance" icon="finance.png" />
            <ActionButton title="Scam" icon="scam.png" />
          </View>

          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreText}>More ⟷</Text>
          </TouchableOpacity>

          {/* Spot The Fake */}
          <Text style={styles.sectionTitle}>Spot The Fake</Text>
          <View style={styles.fakeCard}>
            <View style={styles.fakeDropArea}>
              <Image
                source={require('../../../assets/icons/home/profile.png')}
                style={styles.uploadIcon}
              />
              <Text style={styles.uploadText}>Tap or drag image{'\n'}Upload media to analyze</Text>
            </View>
            <View style={styles.fakeButtons}>
              <TouchableOpacity style={[styles.fakeBtn, { backgroundColor: '#22c55e' }]}>
                <Text style={styles.fakeBtnText}>✓ Real</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.fakeBtn, { backgroundColor: '#ef4444' }]}>
                <Text style={styles.fakeBtnText}>✗ Fake</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Setting */}
          <Text style={styles.sectionTitle}>Setting</Text>
          <View style={styles.storyGrid}>
            <StoryCard title="New Deepfake Scam Alert" time="2h ago" />
            <StoryCard title="Finance Fraud Warning" time="4h ago" />
          </View>

          {/* Report a Scam */}
          <Text style={styles.sectionTitle}>Report a Scam</Text>
          <View style={styles.reportBox}>
            <TextInput
              placeholder="Describe the scam incident..."
              placeholderTextColor="#aaa"
              style={styles.input}
              multiline
            />
            <TouchableOpacity style={styles.reportButton}>
              <Text style={styles.reportText}>Report</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const ActionButton = ({ title, icon }: { title: string; icon: string }) => (
  <TouchableOpacity style={styles.actionBtn}>
    <Image source={iconMap[icon]} style={styles.actionIcon} />
    <Text style={styles.actionText}>{title}</Text>
  </TouchableOpacity>
);

const StoryCard = ({ title, time }: { title: string; time: string }) => (
  <View style={styles.storyCard}>
    <Text style={styles.storyTitle}>{title}</Text>
    <Text style={styles.storyTime}>{time}</Text>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)', // Dark overlay for better readability
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  icons: {
    flexDirection: 'row',
    gap: 12,
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: '#fff',
    marginLeft: 12,
  },
  greeting: {
    marginTop: 12,
    fontSize: 18,
    color: '#fff',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  sectionTitle: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textDecorationLine: 'underline',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  actionBtn: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    width: '30%',
    borderWidth: 1,
    borderColor: '#ffffff33',
  },
  actionIcon: {
    width: 30,
    height: 30,
    marginBottom: 6,
    tintColor: '#fff',
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
  },
  moreButton: {
    alignSelf: 'center',
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff22',
    borderRadius: 16,
  },
  moreText: {
    color: '#fff',
    fontWeight: '600',
  },
  fakeCard: {
    marginTop: 16,
    backgroundColor: '#1f1f3f',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  fakeDropArea: {
    height: 140,
    width: '100%',
    backgroundColor: '#2e2e4e',
    borderRadius: 12,
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  uploadIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
    tintColor: '#aaa',
  },
  uploadText: {
    color: '#aaa',
    textAlign: 'center',
  },
  fakeButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  fakeBtn: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  fakeBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
  storyGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storyCard: {
    backgroundColor: '#3c3c5f',
    borderRadius: 12,
    width: '48%',
    padding: 12,
  },
  storyTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 8,
  },
  storyTime: {
    color: '#aaa',
    fontSize: 12,
  },
  reportBox: {
    backgroundColor: '#2c2c3f',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
  },
  input: {
    height: 100,
    textAlignVertical: 'top',
    color: '#fff',
  },
  reportButton: {
    marginTop: 10,
    backgroundColor: '#ec4899',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  reportText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default HomeScr;