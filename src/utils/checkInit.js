export default function checkInit(instance) {
  if (!instance.stripeInitialized) {
    throw new Error(`You should call init first.
Read more https://github.com/seatmonger/react-native-stripe#usage`)
  }
}
