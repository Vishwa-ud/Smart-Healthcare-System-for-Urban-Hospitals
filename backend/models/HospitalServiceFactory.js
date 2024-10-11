class HospitalServiceFactory {
  createService(serviceType) {
    switch (serviceType) {
      case 'private':
        return new GeneralCheckupService();
      case 'public':
        return new SurgeryService();
      default:
        throw new Error('Unknown service type');
    }
  }
}

class GeneralCheckupService extends mongoose.model('HospitalService') {
  // Customize General Checkup Service logic here
}

class SurgeryService extends mongoose.model('HospitalService') {
  // Customize Surgery Service logic here
}

module.exports = new HospitalServiceFactory();
