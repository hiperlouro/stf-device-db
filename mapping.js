module.exports = function(properties) {
  if (properties.model) {
    switch (properties.model) {
      case 'Nexus 7':
        switch (properties.name) {
          case 'nakasig':
          case 'nakasi':
            return 'Nexus_7_2012'
          case 'razor':
          case 'razorg':
            return 'Nexus_7_2013'
        }
        return null
      case 'KYY22':
        return 'L02'
      case 'SH-06DNERV':
        return 'SH-06D_NERV'
      default:
        return properties.model.replace(/ /g, '_')
    }
  }
  else {
    return null
  }
}