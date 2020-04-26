if (message.content === 'restartthebot') {
  if (message.user.id !== 'Owners ID') return;
  message.channel.send('Restarted.').then(() => {
  process.exit(1);
})
};