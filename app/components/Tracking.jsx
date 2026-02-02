'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Search,
  MapPin,
  Package,
  Clock,
  Truck,
  CheckCircle,
  AlertCircle,
  Plane,
  Warehouse,
  Home,
  Bell,
  Download,
  Share2,
  Radio,
  Shield,
  Zap,
  ChevronRight,
  Copy,
  QrCode,
  Phone,
  HelpCircle,
  RefreshCw,
} from 'lucide-react'

// Color palette matching your logo
const colors = {
  darkBrown: '#521903', // Primary dark
  goldenYellow: '#f8b936', // Primary accent
  orange: '#dc8c18', // Secondary accent
  darkOrange: '#9f4409', // Dark accent
  lightTan: '#c29f85', // Light accent
}

// Light background colors
const backgroundColors = {
  light: '#fefefe',
  lighter: '#f9f9f9',
  lightGray: '#f5f5f5',
  warmWhite: '#faf8f5',
}

// ✅ Use same highlight style everywhere you want "main highlighted text"
const highlightText = {
  background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text', 
}

// Mock tracking data
const mockTrackingData = {
  'LGSW123456789': {
    status: 'in-transit',
    estimatedDelivery: 'Jan 20, 2024',
    currentLocation: 'Dallas, TX',
    service: 'Express Air',
    packageStatus: 'In Transit',
    details: {
      weight: '15.5 kg',
      dimensions: '40×30×25 cm',
      service: 'Express Delivery',
      insurance: 'Covered ($1,000)',
      value: '$850.00',
    }
  },
  'LGSW987654321': {
    status: 'delivered',
    estimatedDelivery: 'Jan 18, 2024',
    currentLocation: 'Houston, TX',
    service: 'Standard Ground',
    packageStatus: 'Delivered',
    details: {
      weight: '8.2 kg',
      dimensions: '35×25×20 cm',
      service: 'Standard Delivery',
      insurance: 'Covered ($500)',
      value: '$450.00',
    }
  },
  'LGSW456789123': {
    status: 'preparing',
    estimatedDelivery: 'Jan 22, 2024',
    currentLocation: 'Los Angeles, CA',
    service: 'Express Air',
    packageStatus: 'Preparing',
    details: {
      weight: '22.0 kg',
      dimensions: '50×40×30 cm',
      service: 'Express Delivery',
      insurance: 'Covered ($2,000)',
      value: '$1,200.00',
    }
  },
  'LGSW789123456': {
    status: 'delayed',
    estimatedDelivery: 'Jan 25, 2024',
    currentLocation: 'Phoenix, AZ',
    service: 'Standard Ground',
    packageStatus: 'Delayed',
    details: {
      weight: '12.5 kg',
      dimensions: '45×35×25 cm',
      service: 'Standard Delivery',
      insurance: 'Covered ($800)',
      value: '$650.00',
    }
  }
}

// Generate a random tracking ID
const generateTrackingId = () => {
  const prefix = 'LGSW';
  const numbers = Math.floor(100000000 + Math.random() * 900000000);
  return `${prefix}${numbers}`;
}

export default function Tracking() {
  const [trackingId, setTrackingId] = useState('')
  const [activeStatus, setActiveStatus] = useState('in-transit')
  const [searchHistory, setSearchHistory] = useState([])
  const [showSample, setShowSample] = useState(true)
  const [estimatedDelivery, setEstimatedDelivery] = useState('Jan 20, 2024')
  const [autoRefresh, setAutoRefresh] = useState(false)
  const [currentLocation, setCurrentLocation] = useState('Dallas, TX')
  const [packageDetails, setPackageDetails] = useState({
    weight: '15.5 kg',
    dimensions: '40×30×25 cm',
    service: 'Express Delivery',
    insurance: 'Covered ($1,000)',
    value: '$850.00',
  })
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [showQRScanner, setShowQRScanner] = useState(false)
  const [shareUrl, setShareUrl] = useState('')
  const fileInputRef = useRef(null)

  // Mock tracking function
  const mockTrackPackage = (id) => {
    // Check if it's a known mock ID
    if (mockTrackingData[id]) {
      const data = mockTrackingData[id];
      setActiveStatus(data.status);
      setEstimatedDelivery(data.estimatedDelivery);
      setCurrentLocation(data.currentLocation);
      setPackageDetails(data.details);
      setShowSample(true);
    } else {
      // Generate random mock data for new IDs
      const statuses = ['preparing', 'in-transit', 'delivered', 'delayed'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      const locations = ['Los Angeles, CA', 'Phoenix, AZ', 'Dallas, TX', 'Houston, TX', 'Chicago, IL', 'New York, NY'];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      
      const mockDetails = {
        'LGSW123456789': packageDetails,
        'LGSW987654321': {
          weight: '8.2 kg',
          dimensions: '35×25×20 cm',
          service: 'Standard Delivery',
          insurance: 'Covered ($500)',
          value: '$450.00',
        },
        'LGSW456789123': {
          weight: '22.0 kg',
          dimensions: '50×40×30 cm',
          service: 'Express Delivery',
          insurance: 'Covered ($2,000)',
          value: '$1,200.00',
        }
      }[id] || packageDetails;

      setActiveStatus(randomStatus);
      setEstimatedDelivery(`Jan ${20 + Math.floor(Math.random() * 10)}, 2024`);
      setCurrentLocation(randomLocation);
      setPackageDetails(mockDetails);
      setShowSample(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (trackingId.trim()) {
      mockTrackPackage(trackingId);
      if (!searchHistory.includes(trackingId)) {
        setSearchHistory((prev) => [trackingId, ...prev.slice(0, 4)])
      }
      console.log('Tracking:', trackingId)
    }
  }

  const copyTrackingId = () => {
    navigator.clipboard.writeText(trackingId || 'LGSW123456789')
    alert('Tracking ID copied to clipboard!')
  }

  const generateMockTracking = () => {
    const mockId = generateTrackingId();
    setTrackingId(mockId);
    mockTrackPackage(mockId);
    
    if (!searchHistory.includes(mockId)) {
      setSearchHistory((prev) => [mockId, ...prev.slice(0, 4)])
    }
  }

  const loadSampleTracking = (sampleId) => {
    setTrackingId(sampleId);
    mockTrackPackage(sampleId);
  }

  const handleStatusToggle = (statusId) => {
    setActiveStatus(statusId);
    // Update timeline based on new status
    if (trackingId) {
      mockTrackPackage(trackingId);
    }
  }

  const toggleNotifications = () => {
    if (!notificationsEnabled) {
      // Mock notification permission request
      if (window.confirm('Enable notifications for tracking updates? You will receive alerts about delivery status changes.')) {
        setNotificationsEnabled(true);
        alert('Notifications enabled! You will receive updates about your shipment.');
      }
    } else {
      setNotificationsEnabled(false);
      alert('Notifications disabled.');
    }
  }

  const shareTrackingStatus = () => {
    const trackingNumber = trackingId || 'LGSW123456789';
    const url = `${window.location.origin}/track/${trackingNumber}`;
    setShareUrl(url);
    
    if (navigator.share) {
      navigator.share({
        title: `Track My Package - ${trackingNumber}`,
        text: `Track my package with ID: ${trackingNumber}. Current status: ${activeStatus}`,
        url: url,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url);
      alert('Tracking link copied to clipboard! Share it with others.');
    }
  }

  const exportTrackingData = () => {
    const trackingData = {
      trackingId: trackingId || 'LGSW123456789',
      status: activeStatus,
      estimatedDelivery,
      currentLocation,
      packageDetails,
      lastUpdated: new Date().toISOString(),
    };
    
    const dataStr = JSON.stringify(trackingData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tracking-${trackingId || 'LGSW123456789'}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert('Tracking data exported successfully!');
  }

  const simulateQRScan = () => {
    setShowQRScanner(true);
    setTimeout(() => {
      const mockQRData = generateTrackingId();
      setTrackingId(mockQRData);
      mockTrackPackage(mockQRData);
      setShowQRScanner(false);
      alert(`QR Code scanned! Tracking ID: ${mockQRData} has been loaded.`);
    }, 1500);
  }

  const callSupport = () => {
    if (window.confirm('Call customer support at +316872022074?')) {
      window.location.href = 'tel:+316872022074';
    }
  }

  const emailSupport = () => {
    window.location.href = 'mailto:support@logisticskva.com?subject=Tracking%20Support&body=Tracking%20ID:%20' + (trackingId || '');
  }

  const statusOptions = [
    { id: 'preparing', label: 'Preparing', bgColor: colors.goldenYellow, textColor: colors.darkBrown, icon: Package },
    { id: 'in-transit', label: 'In Transit', bgColor: colors.orange, textColor: colors.darkBrown, icon: Truck },
    { id: 'delivered', label: 'Delivered', bgColor: colors.lightTan, textColor: colors.darkBrown, icon: CheckCircle },
    { id: 'delayed', label: 'Delayed', bgColor: colors.darkOrange, textColor: 'white', icon: AlertCircle },
  ]

  const timelineSteps = [
    {
      id: 1,
      status: 'Order Confirmed',
      location: 'Los Angeles, CA',
      time: 'Jan 15, 09:30 AM',
      completed: true,
      icon: CheckCircle,
      color: colors.goldenYellow,
      details: 'Order has been confirmed and processing has begun.',
    },
    {
      id: 2,
      status: 'Package Prepared',
      location: 'LA Warehouse',
      time: 'Jan 15, 02:15 PM',
      completed: true,
      icon: Warehouse,
      color: colors.orange,
      details: 'Package has been labeled and prepared for shipping.',
    },
    {
      id: 3,
      status: 'Picked Up',
      location: 'Los Angeles, CA',
      time: 'Jan 16, 09:00 AM',
      completed: true,
      icon: Truck,
      color: colors.darkOrange,
      details: 'Package has been picked up by our logistics team.',
    },
    {
      id: 4,
      status: 'Arrived at Hub',
      location: 'Phoenix, AZ',
      time: 'Jan 17, 03:30 PM',
      completed: true,
      icon: Warehouse,
      color: colors.darkBrown,
      details: 'Package arrived at regional sorting facility.',
    },
    {
      id: 5,
      status: 'In Transit',
      location: currentLocation,
      time: 'Jan 18, 10:20 AM',
      completed: true,
      icon: Plane,
      color: colors.lightTan,
      details: 'Package is in transit to destination hub.',
      current: activeStatus === 'in-transit',
    },
    {
      id: 6,
      status: 'Arrival at Destination',
      location: 'Houston, TX',
      time: 'Jan 19, 02:00 PM (EST)',
      completed: activeStatus === 'delivered' || activeStatus === 'delayed',
      icon: MapPin,
      color: activeStatus === 'delivered' ? colors.goldenYellow : `${colors.darkBrown}40`,
      details: activeStatus === 'delivered' ? 'Arrived at destination hub.' : 'Expected arrival at destination hub.',
    },
    {
      id: 7,
      status: 'Out for Delivery',
      location: 'Houston, TX',
      time: activeStatus === 'delivered' ? 'Jan 20, 08:00 AM (EST)' : 'Jan 20, 08:00 AM (EST)',
      completed: activeStatus === 'delivered',
      icon: Truck,
      color: activeStatus === 'delivered' ? colors.goldenYellow : `${colors.darkBrown}40`,
      details: activeStatus === 'delivered' ? 'Package was out for delivery.' : 'Package will be out for delivery.',
    },
    {
      id: 8,
      status: 'Delivered',
      location: 'Houston, TX',
      time: activeStatus === 'delivered' ? 'Jan 20, 12:00 PM (EST)' : estimatedDelivery + ', 12:00 PM (EST)',
      completed: activeStatus === 'delivered',
      icon: Home,
      color: activeStatus === 'delivered' ? colors.goldenYellow : `${colors.darkBrown}40`,
      details: activeStatus === 'delivered' ? 'Package delivered to recipient.' : 'Expected delivery to recipient.',
    },
  ]

  // Auto refresh simulation
  useEffect(() => {
    let interval
    if (autoRefresh) {
      interval = setInterval(() => {
        console.log('Auto-refreshing tracking data...')
        if (trackingId) {
          mockTrackPackage(trackingId);
        }
      }, 30000)
    }
    return () => clearInterval(interval)
  }, [autoRefresh, trackingId])

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative" style={{ backgroundColor: backgroundColors.warmWhite }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23521903' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* QR Scanner Overlay */}
      {showQRScanner && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4 text-center" style={{ color: colors.darkBrown }}>
              Scanning QR Code
            </h3>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-64 h-64 border-4 border-dashed rounded-lg flex items-center justify-center" style={{ borderColor: colors.goldenYellow }}>
                  <div className="animate-pulse flex flex-col items-center">
                    <QrCode className="h-16 w-16 mb-4" style={{ color: colors.goldenYellow }} />
                    <p style={{ color: colors.darkBrown }}>Scanning...</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent border-t-goldenYellow border-r-goldenYellow animate-spin rounded-full"></div>
              </div>
            </div>
            <button
              onClick={() => setShowQRScanner(false)}
              className="w-full py-3 rounded-lg font-bold transition-all"
              style={{
                backgroundColor: colors.darkBrown,
                color: 'white',
              }}
            >
              Cancel Scan
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div
              className="inline-flex items-center gap-2 rounded-full mb-4 px-4 py-2 shadow-sm"
              style={{
                backgroundColor: colors.goldenYellow,
                color: colors.darkBrown,
                border: `1px solid ${colors.darkBrown}20`,
              }}
            >
              <Radio className="h-4 w-4" />
              <span className="text-sm font-semibold">LIVE TRACKING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span style={{ color: '#f8b936' }}>
                Track Your
              </span>
              <span className="block" style={{ color: '#8B5A2B' }}>
                Shipment in Real-Time
              </span>
            </h2>

            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: colors.darkBrown, opacity: 0.7 }}>
              Enter your tracking number for live updates, estimated delivery times, and detailed shipment information
            </p>
          </div>

          {/* Main Tracking Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {/* Left Column - Tracking Form */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl shadow-sm p-6 sm:p-8"
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.lightTan}50`,
                }}
              >
                {/* Tracking Form */}
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold" style={{ color: '#f8b936' }}>
                        Enter Tracking Number
                      </h3>
                      <button
                        onClick={generateMockTracking}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all hover:scale-105"
                        style={{
                          backgroundColor: colors.darkBrown,
                          color: 'white',
                          fontSize: '0.75rem',
                        }}
                      >
                        <RefreshCw className="h-3 w-3" />
                        <span>Generate Mock ID</span>
                      </button>
                    </div>

                    <button
                      onClick={simulateQRScan}
                      className="text-sm flex items-center gap-1 hover:opacity-80 transition-opacity px-3 py-1.5 rounded-lg"
                      style={{
                        background: 'linear-gradient(90deg, #8B5A2B, #D99A3E)',
                        color: '#FFFFFF',
                      }}
                    >
                      <QrCode className="h-4 w-4" />
                      <span>Scan QR Code</span>
                    </button>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-grow relative">
                        <input
                          type="text"
                          value={trackingId}
                          onChange={(e) => setTrackingId(e.target.value)}
                          placeholder="Enter tracking number (e.g., LGSW123456789)"
                          className="w-full px-6 py-4 pl-12 rounded-xl focus:ring-2 transition-all text-lg"
                          style={{
                            border: `1px solid ${colors.lightTan}`,
                            backgroundColor: `${colors.lightTan}10`,
                            color: colors.darkBrown,
                          }}
                        />
                        <Package
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5"
                          style={{ color: colors.darkBrown, opacity: 0.5 }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="group px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 whitespace-nowrap hover:scale-105"
                        style={{
                          background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                          color: colors.darkBrown,
                        }}
                      >
                        <Search className="h-5 w-5" />
                        <span style={{ color: '#8B5A2B' }}>Track Shipment</span>
                        <Zap className="h-4 w-4 group-hover:animate-pulse" />
                      </button>
                    </div>
                  </form>

                  {/* Sample Tracking IDs */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2" style={highlightText}>
                      Try Sample Tracking IDs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.keys(mockTrackingData).map((sampleId) => (
                        <button
                          key={sampleId}
                          onClick={() => loadSampleTracking(sampleId)}
                          className="text-sm px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 hover:opacity-80"
                          style={{
                            backgroundColor: colors.darkBrown,
                            color: 'white',
                          }}
                        >
                          <span>{sampleId}</span>
                          <ChevronRight className="h-3 w-3" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Searches */}
                  {searchHistory.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2" style={highlightText}>
                        Recent Searches
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {searchHistory.map((id, idx) => (
                          <button
                            key={idx}
                            onClick={() => loadSampleTracking(id)}
                            className="text-sm px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 hover:opacity-80"
                            style={{
                              backgroundColor: `${colors.lightTan}20`,
                              color: colors.darkBrown,
                            }}
                          >
                            <span style={highlightText}>{id}</span>
                            <ChevronRight className="h-3 w-3" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Status Toggle */}
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold mb-3" style={highlightText}>
                      Quick Status
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {statusOptions.map((status) => (
                        <button
                          key={status.id}
                          onClick={() => handleStatusToggle(status.id)}
                          className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                            activeStatus === status.id ? 'border-2 shadow-sm' : 'border hover:opacity-90'
                          }`}
                          style={{
                            backgroundColor:
                              activeStatus === status.id ? status.bgColor + '20' : `${colors.lightTan}10`,
                            borderColor: activeStatus === status.id ? status.bgColor : colors.lightTan,
                            color: activeStatus === status.id ? status.textColor : colors.darkBrown,
                          }}
                        >
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.bgColor }} />
                          <span className="text-sm font-medium" style={highlightText}>
                            {status.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sample Tracking Info */}
                {showSample && (
                  <div
                    className="rounded-2xl p-6 border shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${colors.goldenYellow}10, ${colors.orange}10)`,
                      borderColor: colors.lightTan,
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="text-sm mb-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                          Tracking ID
                        </div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-bold font-mono" style={highlightText}>
                            {trackingId || 'LGSW123456789'}
                          </h3>
                          <button
                            onClick={copyTrackingId}
                            className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                            title="Copy tracking ID"
                          >
                            <Copy className="h-4 w-4" style={{ color: colors.darkBrown, opacity: 0.5 }} />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end">
                        <div
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-2"
                          style={{
                            backgroundColor: colors.goldenYellow + '30',
                            color: colors.darkBrown,
                          }}
                        >
                          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.goldenYellow }} />
                          <span className="font-semibold" style={highlightText}>
                            {activeStatus.toUpperCase()}
                          </span>
                        </div>
                        <div className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                          Last updated: Just now
                        </div>
                      </div>
                    </div>

                    {/* Status Badges */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="rounded-xl p-4" style={{ backgroundColor: 'white' }}>
                        <div className="text-sm mb-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                          Estimated Delivery
                        </div>
                        <div className="text-lg font-bold" style={highlightText}>
                          {estimatedDelivery}
                        </div>
                      </div>

                      <div className="rounded-xl p-4" style={{ backgroundColor: 'white' }}>
                        <div className="text-sm mb-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                          Current Location
                        </div>
                        <div className="text-lg font-bold" style={highlightText}>
                          {currentLocation}
                        </div>
                      </div>

                      <div className="rounded-xl p-4" style={{ backgroundColor: 'white' }}>
                        <div className="text-sm mb-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                          Shipping Method
                        </div>
                        <div className="text-lg font-bold" style={highlightText}>
                          Express Air
                        </div>
                      </div>

                      <div className="rounded-xl p-4" style={{ backgroundColor: 'white' }}>
                        <div className="text-sm mb-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                          Package Status
                        </div>
                        <div className="text-lg font-bold" style={highlightText}>
                          {statusOptions.find(s => s.id === activeStatus)?.label || 'In Transit'}
                        </div>
                      </div>
                    </div>

                    {/* Package Details */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4" style={highlightText}>
                        Package Details
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {Object.entries(packageDetails).map(([key, value]) => (
                          <div key={key} className="rounded-lg p-3" style={{ backgroundColor: 'white' }}>
                            <div className="text-xs uppercase tracking-wider" style={{ color: colors.darkBrown, opacity: 0.5 }}>
                              {key}
                            </div>
                            <div className="text-sm font-semibold" style={highlightText}>
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={toggleNotifications}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors hover:opacity-90"
                        style={{
                          backgroundColor: notificationsEnabled ? colors.goldenYellow : colors.lightTan,
                          color: colors.darkBrown,
                        }}
                      >
                        <Bell className="h-4 w-4" />
                        <span style={{ color: colors.darkBrown }}>
                          {notificationsEnabled ? 'Notifications ON' : 'Get Updates'}
                        </span>
                      </button>

                      <button
                        onClick={shareTrackingStatus}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors hover:opacity-90"
                        style={{
                          backgroundColor: colors.goldenYellow,
                          color: colors.darkBrown,
                          border: `1px solid ${colors.lightTan}`,
                        }}
                      >
                        <Share2 className="h-4 w-4" />
                        <span>Share Status</span>
                      </button>

                      <button
                        onClick={exportTrackingData}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors hover:opacity-90"
                        style={{
                          backgroundColor: colors.goldenYellow,
                          color: colors.darkBrown,
                          border: `1px solid ${colors.lightTan}`,
                        }}
                      >
                        <Download className="h-4 w-4" />
                        <span>Export</span>
                      </button>

                      <button
                        onClick={() => setAutoRefresh(!autoRefresh)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors hover:opacity-90"
                        style={{
                          backgroundColor: autoRefresh ? colors.goldenYellow : colors.lightTan,
                          color: colors.darkBrown,
                          border: `1px solid ${autoRefresh ? colors.goldenYellow : colors.lightTan}`,
                        }}
                      >
                        <Radio className="h-4 w-4" />
                        <span>{autoRefresh ? 'Auto Refresh ON' : 'Auto Refresh'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div>
              <div
                className="rounded-2xl shadow-sm p-6 sm:p-8 h-full"
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.lightTan}50`,
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold" style={highlightText}>
                    Delivery Timeline
                  </h3>
                  <button
                    onClick={() => alert('Package is insured and protected by our security system.')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Package Security Info"
                  >
                    <Shield className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                  </button>
                </div>

                {/* Timeline */}
                <div className="space-y-6">
                  {timelineSteps.map((step, index) => (
                    <div key={step.id} className="relative">
                      {index < timelineSteps.length - 1 && (
                        <div
                          className="absolute left-4 top-8 h-12 w-0.5"
                          style={{
                            backgroundColor: step.completed ? colors.lightTan : `${colors.lightTan}50`,
                          }}
                        />
                      )}

                      <div className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: step.completed
                              ? `${colors.goldenYellow}20`
                              : step.current
                                ? `${colors.orange}20`
                                : `${colors.lightTan}10`,
                          }}
                        >
                          <step.icon className="h-4 w-4" style={{ color: step.color }} />
                        </div>

                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h4
                              className="font-semibold"
                              style={step.completed ? highlightText : { color: `${colors.darkBrown}80` }}
                            >
                              {step.status}
                            </h4>
                            <span
                              className="text-sm"
                              style={{
                                color: step.completed ? `${colors.darkBrown}70` : `${colors.darkBrown}40`,
                              }}
                            >
                              {step.time}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-3 w-3" style={{ color: colors.darkBrown, opacity: 0.5 }} />
                            <span className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                              {step.location}
                            </span>
                          </div>

                          <p className="text-sm mt-2" style={{ color: colors.darkBrown, opacity: 0.6 }}>
                            {step.details}
                          </p>

                          {step.current && (
                            <button
                              onClick={() => alert(`You are currently at: ${step.location}\nNext step: ${timelineSteps[index + 1]?.status || 'Delivery'}`)}
                              className="mt-2 inline-flex items-center gap-1 text-xs px-2 py-1 rounded"
                              style={{
                                backgroundColor: `${colors.goldenYellow}20`,
                                color: colors.darkBrown,
                              }}
                            >
                              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.goldenYellow }} />
                              <span style={highlightText}>CURRENT LOCATION</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Estimated Delivery Card */}
                <div
                  className="mt-8 rounded-xl p-4 border"
                  style={{
                    backgroundColor: `${colors.goldenYellow}10`,
                    borderColor: colors.lightTan,
                    color: colors.darkBrown,
                  }}
                >
                  <div className="text-sm mb-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                    Estimated Delivery
                  </div>
                  <div className="text-2xl font-bold" style={highlightText}>
                    {estimatedDelivery}
                  </div>
                  <div className="text-sm mt-2" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                    by 12:00 PM
                  </div>
                  <div className="w-full h-2 rounded-full mt-3 overflow-hidden" style={{ backgroundColor: `${colors.lightTan}50` }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: activeStatus === 'delivered' ? '100%' : '70%',
                        background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Help Section */}
          <div
            className="rounded-2xl p-6 sm:p-8 shadow-sm"
            style={{
              backgroundColor: 'white',
              border: `1px solid ${colors.lightTan}50`,
              background: `linear-gradient(135deg, white, ${backgroundColors.lighter})`,
            }}
          >
            <h3 className="text-xl font-bold mb-4" style={highlightText}>
              Need Help With Tracking?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className="rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer"
                style={{
                  backgroundColor: `${colors.goldenYellow}10`,
                  border: `1px solid ${colors.goldenYellow}30`,
                }}
                onClick={() => alert('Check your email for the tracking number. It usually starts with "LGSW" followed by 9 digits.')}
              >
                <div className="font-bold text-lg mb-2 flex items-center gap-2" style={highlightText}>
                  <HelpCircle className="h-5 w-5" />
                  Can't find tracking number?
                </div>
                <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Check your email confirmation or shipping documents.
                </p>
              </div>

              <div
                className="rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer"
                style={{
                  backgroundColor: `${colors.orange}10`,
                  border: `1px solid ${colors.orange}30`,
                }}
                onClick={() => alert('Tracking updates may take 24-48 hours to appear in our system. If it\'s been longer, please contact support.')}
              >
                <div className="font-bold text-lg mb-2 flex items-center gap-2" style={highlightText}>
                  <Clock className="h-5 w-5" />
                  Tracking not updating?
                </div>
                <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Updates may take 24-48 hours to appear. Contact support if delayed.
                </p>
              </div>

              <div
                className="rounded-xl p-5 hover:shadow-md transition-shadow"
                style={{
                  backgroundColor: `${colors.darkBrown}10`,
                  border: `1px solid ${colors.darkBrown}20`,
                }}
              >
                <div className="font-bold text-lg mb-2 flex items-center gap-2" style={highlightText}>
                  <Phone className="h-5 w-5" />
                  Contact Support
                </div>
                <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Call{' '}
                  <button
                    onClick={callSupport}
                    className="font-bold hover:underline"
                    style={{ color: colors.goldenYellow }}
                  >
                    +316872022074
                  </button>{' '}
                  or email{' '}
                  <button
                    onClick={emailSupport}
                    style={{ color: colors.goldenYellow }}
                    className="font-medium hover:underline"
                  >
                    support@logisticskva.com
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}