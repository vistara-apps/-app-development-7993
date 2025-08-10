import { supabase } from '../contexts/SupabaseContext'

// User management
export const createUser = async (userData) => {
  const { data, error } = await supabase
    .from('users')
    .insert([userData])
    .select()
  
  return { data, error }
}

export const getUser = async (userId) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()
  
  return { data, error }
}

// Customer management
export const createCustomer = async (customerData) => {
  const { data, error } = await supabase
    .from('customers')
    .insert([customerData])
    .select()
  
  return { data, error }
}

// Kit management
export const getKitsByRegion = async (region) => {
  const { data, error } = await supabase
    .from('kits')
    .select('*')
    .eq('region', region)
  
  return { data, error }
}

// Order management
export const createOrder = async (orderData) => {
  const { data, error } = await supabase
    .from('orders')
    .insert([orderData])
    .select()
  
  return { data, error }
}

export const getOrdersByCustomer = async (customerId) => {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      kits (*)
    `)
    .eq('customer_id', customerId)
    .order('created_at', { ascending: false })
  
  return { data, error }
}

// Sensor management
export const createSensor = async (sensorData) => {
  const { data, error } = await supabase
    .from('sensors')
    .insert([sensorData])
    .select()
  
  return { data, error }
}

export const getSensorsByCustomer = async (customerId) => {
  const { data, error } = await supabase
    .from('sensors')
    .select('*')
    .eq('customer_id', customerId)
  
  return { data, error }
}

// Readings management
export const createReading = async (readingData) => {
  const { data, error } = await supabase
    .from('readings')
    .insert([readingData])
    .select()
  
  return { data, error }
}

export const getReadingsBySensor = async (sensorId, limit = 50) => {
  const { data, error } = await supabase
    .from('readings')
    .select('*')
    .eq('sensor_id', sensorId)
    .order('timestamp', { ascending: false })
    .limit(limit)
  
  return { data, error }
}

// Subscription management
export const createSubscription = async (subscriptionData) => {
  const { data, error } = await supabase
    .from('subscriptions')
    .insert([subscriptionData])
    .select()
  
  return { data, error }
}

export const getActiveSubscriptions = async (customerId) => {
  const { data, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('customer_id', customerId)
    .eq('status', 'active')
  
  return { data, error }
}

// Partner management
export const createPartner = async (partnerData) => {
  const { data, error } = await supabase
    .from('partners')
    .insert([partnerData])
    .select()
  
  return { data, error }
}

export const getReferralsByPartner = async (partnerId) => {
  const { data, error } = await supabase
    .from('referrals')
    .select(`
      *,
      customers (*),
      partners (*)
    `)
    .eq('partner_id', partnerId)
    .order('created_at', { ascending: false })
  
  return { data, error }
}