var topology = new Le5leTopology.Topology('topology', {});
// data.locked = 1;
topology.open(data);

function allowDrop(ev) {
  ev.preventDefault();
}

function onDrag(ev) {
  ev.dataTransfer.setData(
    'Topology',
    JSON.stringify({
      name: 'square',
      rect: {
        width: 100,
        height: 100,
      },
    })
  );
}
